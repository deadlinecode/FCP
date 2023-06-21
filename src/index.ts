import http from "http";
import https from "https";
import express, { NextFunction, Request, Response, Router } from "express";
import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import cp from "child_process";
import fileUpload from "express-fileupload";
import AdmZip from "adm-zip";

interface Config {
  ssl?: string;
  server: string;
  jwt: string;
  user: {
    name: string;
    password: string;
  };
}

if (!fs.existsSync(path.join(process.cwd()))) {
  console.log("No config.json found");
  process.exit(1);
}

enum ServerStatus {
  Offline,
  Starting,
  Stopping,
  Online,
  // Loading,
  // Loading is just for frontend
}

const isWin = process.platform === "win32",
  config: Config = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "config.json")).toString()
  ),
  app = express(),
  server = config.ssl
    ? https.createServer(
        {
          key: fs.readFileSync(path.join(config.ssl, "privkey.pem")),
          cert: fs.readFileSync(path.join(config.ssl, "fullchain.pem")),
          ca: fs.readFileSync(path.join(config.ssl, "chain.pem")),
        },
        app
      )
    : http.createServer(app),
  io = new Server(server);

var child: cp.ChildProcessWithoutNullStreams,
  serverInfos = {
    status: {
      val: ServerStatus.Offline,
      set: (status: ServerStatus) => {
        serverInfos.status.val = status;
        io.to("all").emit("server.status", serverInfos.status.val);
      },
    },
  },
  filesToDelete: string[] = [];

app
  .use([
    cookieParser(),
    async (req: Request, res: Response, next: NextFunction) => {
      if (req.url !== "/app") return next();
      const token = req.cookies.token;
      if (
        !token ||
        !(await new Promise<boolean>((r) =>
          jwt.verify(token, config.jwt, {}, (err) => r(err === null))
        ))
      )
        return req.method === "GET" ? res.redirect("/") : res.status(401).end();
      next();
    },
    express.static(path.join(__dirname, "../web/dist")),
    express.json(),
  ])
  .get("/dl", (req, res) =>
    fs.existsSync(path.join(process.cwd(), "mods.zip"))
      ? res.sendFile(path.join(process.cwd(), "mods.zip"))
      : res.send("Mods file wasn't generated. Please contact the Admin").end()
  )
  .use(
    "/api",
    Router()
      .post("/login", async (req, res) => {
        if (
          !req.body ||
          typeof req.body !== "object" ||
          Array.isArray(req.body)
        )
          return res.status(400).end();

        const { username, password } = req.body;
        if ([username, password].some((x) => typeof x !== "string"))
          return res.status(400).end();

        if (username !== config.user.name || password !== config.user.password)
          return res.status(403).end();

        const token = await new Promise<string | undefined>((r) =>
          jwt.sign({ user: config.user.name }, config.jwt, {}, (err, token) =>
            r(token)
          )
        );

        if (!token) return res.status(500).end();

        return res
          .cookie("token", token, {
            httpOnly: true,
            expires: new Date(253402300000000),
          })
          .status(200)
          .end();
      })
      .use(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.cookies.token;
        if (
          !token ||
          !(await new Promise<boolean>((r) =>
            jwt.verify(token, config.jwt, {}, (err) => r(err === null))
          ))
        )
          return res.status(401).end();
        next();
      })
      .use(
        "/mods",
        Router()
          .get("/", async (req, res) =>
            res.json(
              (
                await fsp
                  .readdir(path.join(config.server, "mods"))
                  .catch(() => [])
              )
                .filter((x) => x.endsWith(".jar"))
                .map((x) => x.split(".").slice(0, -1).join("."))
                .filter((x) => !filesToDelete.includes(x))
            )
          )
          .delete("/", async (req, res) => {
            if (
              !req.body ||
              typeof req.body !== "object" ||
              Array.isArray(req.body)
            )
              return res.status(400).end();

            const { name } = req.body;
            if (typeof name !== "string") return res.status(400).end();

            if (!fs.existsSync(path.join(config.server, "mods", `${name}.jar`)))
              return res.status(404).send("File not found").end();

            if (serverInfos.status.val === ServerStatus.Offline)
              await fsp.rm(path.join(config.server, "mods", `${name}.jar`), {
                force: true,
              });
            else filesToDelete.push(name);

            return res.status(200).end();
          })
          .use(
            fileUpload({
              useTempFiles: true,
              tempFileDir: `${process.cwd()}/temp`,
            })
          )
          .post("/upload", (req, res) => {
            let uploadFile = req.files?.file;
            if (
              !uploadFile ||
              Array.isArray(uploadFile) ||
              uploadFile.mimetype !== "application/java-archive" ||
              !uploadFile.name.endsWith(".jar")
            ) {
              res.status(400).end();
              return (
                uploadFile &&
                (Array.isArray(uploadFile) ? uploadFile : [uploadFile]).map(
                  (file) =>
                    fsp.rm(file.tempFilePath, { force: true }).catch(() => null)
                )
              );
            }
            const tempFile = uploadFile.tempFilePath;
            uploadFile.mv(
              path.join(config.server, "mods", uploadFile.name),
              (err) => {
                err ? res.status(500).send(err) : res.status(200).end();
                fsp.rm(tempFile, { force: true });
              }
            );
          })
      )
      .use(
        "/server",
        Router()
          .post("/exec", (req, res) => {
            if (
              !req.body ||
              typeof req.body !== "object" ||
              Array.isArray(req.body)
            )
              return res.status(400).end();

            const { cmd } = req.body;
            if (typeof cmd !== "string") return res.status(400).end();

            if (
              serverInfos.status.val !== ServerStatus.Online ||
              !child ||
              child.killed
            )
              return res.status(400).send("Server not running");

            child.stdin.write(`${cmd}\n`);
            res.status(200).end();
          })
          .post("/start", async (req, res) => {
            if (
              serverInfos.status.val !== ServerStatus.Offline ||
              (child && !child.killed)
            )
              return res.status(200).send("Server already running").end();

            const archive = new AdmZip();
            (
              await fsp
                .readdir(path.join(config.server, "mods"))
                .catch(() => [])
            )
              .filter((x) => x.endsWith(".jar"))
              .forEach((file) =>
                archive.addLocalFile(path.join(config.server, "mods", file))
              );
            archive.writeZipPromise(path.join(process.cwd(), "mods.zip"));

            serverInfos.status.set(ServerStatus.Starting);
            child = cp.spawn(isWin ? "run.bat" : "./run.sh", [], {
              cwd: config.server,
            });
            child
              .on("exit", async () => {
                while (filesToDelete.length)
                  await fsp.rm(
                    path.join(
                      config.server,
                      "mods",
                      `${filesToDelete.shift() as string}.jar`
                    ),
                    {
                      force: true,
                    }
                  );
                serverInfos.status.set(ServerStatus.Offline);
                child = undefined as any;
              })
              .stdout.on(
                "data",
                (data) =>
                  data
                    .toString()
                    .includes(
                      "[Server thread/INFO] [minecraft/DedicatedServer]: Done"
                    ) && serverInfos.status.set(ServerStatus.Online)
              );
            res.status(200).end();
          })
          .post("/stop", (req, res) => {
            if (
              serverInfos.status.val !== ServerStatus.Online ||
              !child ||
              child.killed
            )
              return res.status(400).send("Server not running");
            serverInfos.status.set(ServerStatus.Stopping);
            child.stdin.write("stop\n");
            res.status(200).end();
          })
      )
  )
  .get("/app", async (_, res) =>
    res.sendFile(path.join(__dirname, "../web/dist/index.html"))
  )
  .all("*", async (req, res, next) =>
    req.method === "GET" ? res.redirect("/") : next()
  );

io.on("connection", async (socket) => {
  if (!socket.handshake.headers.cookie) return socket.disconnect();
  const cookies = cookie.parse(socket.handshake.headers.cookie);
  if (
    !cookies ||
    !cookies.token ||
    !(await new Promise<boolean>((r) =>
      jwt.verify(cookies.token, config.jwt, {}, (err) => r(err === null))
    ))
  )
    return socket.disconnect();
  !(child && !child.killed) &&
    serverInfos.status.val === ServerStatus.Online &&
    serverInfos.status.set(ServerStatus.Offline);
  socket.join("all");
  socket.emit("server.status", serverInfos.status.val);
});

server.listen(config.ssl ? 443 : 80, () => console.log("Server running..."));
