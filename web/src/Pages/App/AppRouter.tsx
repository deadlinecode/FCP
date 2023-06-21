import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Toast from "../../components/Toast/Toast";
import Cnt from "../../components/Cnt/Cnt";
import Btn, { BtnType, IconPosition } from "../../components/Btn/Btn";
import "./AppRouter.scss";

export enum ServerStatus {
  Offline,
  Starting,
  Stopping,
  Online,
  Loading,
}

export default () => {
  const [serverStatus, setServerStatus] = useState(ServerStatus.Loading),
    serverLock =
      serverStatus === ServerStatus.Loading ||
      serverStatus === ServerStatus.Starting ||
      serverStatus === ServerStatus.Stopping;
  useEffect(() => {
    const sock = io();

    sock
      .on("server.status", (_serverStatus) => setServerStatus(_serverStatus))
      .on("toast", (toast) => Toast.addToast(toast))
      .on("disconnect", () =>
        Toast.addToast({
          title: "Socket disconnected",
          children: (
            <Cnt silent>
              Looks like the server disconnected :/
              <br />
              Please refresh the page
            </Cnt>
          ),
          btns: [
            {
              children: "Refresh",
              onClick: () => window.location.reload(),
              type: BtnType.Warning,
            },
          ],
        })
      );

    return () => {
      sock.disconnect();
    };
  }, []);

  return (
    <Cnt classNames={["App"]} fullS>
      <Cnt classNames={["AppHeader"]} fullW centerV caged>
        <Cnt silent>Status:</Cnt>{" "}
        {serverStatus === ServerStatus.Loading ? (
          "Loading..."
        ) : (
          <Cnt>
            Server{" "}
            {
              [
                "Offline",
                "starting...",
                "stopping...",
                "Online",
                "Loading infos...",
              ][serverStatus]
            }
          </Cnt>
        )}
        <Cnt classNames={["Console"]}>
          {">"}
          <input
            onKeyDown={(ev) => {
              if (ev.key !== "Enter") return;
              ev.preventDefault();
              const inp = ev.currentTarget,
                value = inp.value;
              inp.value = "";
              fetch("/api/server/exec", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cmd: value }),
              }).then(async (r) =>
                Toast.addToast({
                  title: r.ok ? "Command executed" : "Error executing command",
                  children: r.ok ? undefined : (
                    <Cnt silent>{(await r.text()) || "Unknown error"}</Cnt>
                  ),
                  hideAfter: r.ok ? 1000 : undefined,
                })
              );
            }}
          />
        </Cnt>
        <Btn
          icon={
            serverStatus === ServerStatus.Starting
              ? undefined
              : {
                  name:
                    serverStatus === ServerStatus.Online
                      ? "stop-circle"
                      : "play-circle",
                }
          }
          iconPosition={IconPosition.Right}
          classNames={["AlignRight"]}
          type={
            [
              BtnType.Success,
              BtnType.Secondary,
              BtnType.Secondary,
              BtnType.Danger,
            ][serverStatus]
          }
          disabled={serverLock}
          loading={
            serverLock === true
              ? [
                  "Start Server",
                  "Server starting...",
                  "Server stopping...",
                  "Stop Server",
                  "Loading infos...",
                ][serverStatus]
              : false
          }
          onClick={() =>
            fetch(
              `/api/server/${
                serverStatus === ServerStatus.Online ? "stop" : "start"
              }`,
              { method: "POST" }
            )
          }
        >
          {
            [
              "Start Server",
              "Server starting...",
              "Server stopping...",
              "Stop Server",
              "Loading infos...",
            ][serverStatus]
          }
        </Btn>
      </Cnt>
      <main>
        <Cnt fullS center>
          <HashRouter>
            <Switch>
              <Route
                path="/"
                exact
                render={() => <Home {...{ serverStatus }} />}
              />
              <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
          </HashRouter>
        </Cnt>
      </main>
    </Cnt>
  );
};
