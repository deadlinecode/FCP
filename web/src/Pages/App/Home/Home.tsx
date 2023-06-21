import { useEffect, useState, useRef } from "react";
import Cnt from "../../../components/Cnt/Cnt";
import "./Home.scss";
import Loader from "../../../components/Loader/Loader";
import Toast from "../../../components/Toast/Toast";
import Arr from "../../../components/Arr/Arr";
import Search from "../../../components/Search/Search";
import Btn, { BtnType, IconPosition } from "../../../components/Btn/Btn";
import Dialog from "../../../components/Dialog/Dialog";
import { ServerStatus } from "../AppRouter";
import Toggle, { ToggleType } from "../../../components/Toggle/Toggle";

enum DragMode {
  None,
  Over,
  Upload,
}

var _filesToUpload: { completed: boolean; err?: boolean; file: File }[] = [];
export default (props: { serverStatus: ServerStatus }) => {
  const serverLock =
      props.serverStatus !== ServerStatus.Online &&
      props.serverStatus !== ServerStatus.Offline &&
      props.serverStatus !== ServerStatus.Loading,
    [loading, setLoading] = useState(true),
    [mods, setMods] = useState<string[]>([]),
    [showDeleteDialog, setShowDeleteDialog] = useState(false),
    [deleteLock, setDeleteLock] = useState(false),
    [selectedMod, setSelectedMod] = useState(""),
    [dragMode, setDragMode] = useState(DragMode.None),
    [filesToUpload, setFilesToUpload] =
      useState<typeof _filesToUpload>(_filesToUpload),
    fileInputRef = useRef<HTMLInputElement>(null),
    [uploadModLock, setUploadModLock] = useState(false),
    [search, setSearch] = useState("");

  const fetchMods = () => {
    fetch("/api/mods").then(async (r) => {
      if (!r.ok) {
        if (r.status === 401) return window.location.reload();
        return Toast.addToast({
          title: "Error while fetching mods",
          children: <Cnt silent>{(await r.text()) || "Unknown error"}</Cnt>,
        });
      }
      try {
        const mods = await r.json();
        if (
          !mods ||
          !Array.isArray(mods) ||
          mods.some((x) => typeof x !== "string")
        )
          throw new Error("Invalid response");
        setMods(mods);
      } catch (err) {
        Toast.addToast({
          title: "Error while fetching mods",
          children: (
            <Cnt silent>{(err as any)?.message || err || "Unknown error"}</Cnt>
          ),
        });
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchMods();
  }, []);

  const modSelect = (files: (File | any)[]) => {
      if (serverLock || uploadModLock) return;
      files = files.filter(
        (x) =>
          x instanceof File &&
          x.type === "application/java-archive" &&
          x.name.endsWith(".jar")
        //  &&
        // !mods.includes(x.name.split(".").slice(0, -1).join("."))
      );
      if (!files.length) return;
      if (_filesToUpload.length)
        files.forEach(
          (file) =>
            !_filesToUpload.some((x) => x.file.name === file.name) &&
            _filesToUpload.push({ completed: false, file })
        );
      else _filesToUpload = files.map((file) => ({ completed: false, file }));
      setFilesToUpload(_filesToUpload);
      setDragMode(DragMode.Upload);
    },
    modUpload = () => {
      if (serverLock || uploadModLock) return;
      setUploadModLock(true);
      Promise.all(
        _filesToUpload.map(async ({ file }) => {
          const data = new FormData();
          data.append("file", file);
          const rsp = await fetch("/api/mods/upload", {
            method: "POST",
            body: data,
          });
          !rsp.ok &&
            Toast.addToast({
              title: "Error while uploading mod",
              children: (
                <Cnt silent>
                  Error while uploading {file.name}:<br />
                  {(await rsp.text()) || "Unknown error"}
                </Cnt>
              ),
            });
          setFilesToUpload(
            (_filesToUpload = _filesToUpload.map((x) =>
              x.file === file ? { ...x, completed: true, err: !rsp.ok } : x
            ))
          );
        })
      ).then(() => {
        setUploadModLock(false);
        setFilesToUpload((_filesToUpload = []));
        setDragMode(DragMode.None);
        fetchMods();
      });
    };

  const deleteMod = async (mod = selectedMod) => {
    const _selectedMod = mod;
    setDeleteLock(true);
    setSelectedMod("");
    const rsp = await fetch("/api/mods", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: _selectedMod }),
    });
    setDeleteLock(false);
    setShowDeleteDialog(false);
    if (!rsp.ok)
      return Toast.addToast({
        title: "Error while deleting mod",
        children: (
          <Cnt silent>
            Error while deleting mod "{_selectedMod}":
            <br />
            {(await rsp.text()) || "Unknown error"}
          </Cnt>
        ),
      });
    fetchMods();
  };

  return (
    <Cnt classNames={["Home"]} borderR caged>
      <Loader show={loading} fullCover />
      <Dialog
        show={showDeleteDialog}
        title="Delete Mod"
        btns={[
          {
            type: BtnType.Danger,
            children: "Delete",
            disabled: deleteLock,
            onClick: () => deleteMod(),
          },
          {
            type: BtnType.Secondary,
            children: "Cancel",
            disabled: deleteLock,
            onClick: () => setShowDeleteDialog(false),
          },
        ]}
        onClose={() => setShowDeleteDialog(false)}
      >
        <Cnt silent>
          You sure you want to delete "{selectedMod}"
          <br />
          Deleting the mod is irreversible
          <br />
          {props.serverStatus === ServerStatus.Offline
            ? ""
            : "Changes will only take effect after server restart"}
          <br />
          <br />
        </Cnt>
        <Cnt
          centerV
          container={{
            style: { transform: "scale(0.85)", transformOrigin: "0" },
          }}
        >
          <Toggle
            type={ToggleType.Checkbox}
            onChange={(val) =>
              localStorage.setItem("IgnoreModDeleteDialog", String(val))
            }
          />
          <Cnt silent>Don't show this message again</Cnt>
        </Cnt>
      </Dialog>
      <Cnt classNames={["Mods"]}>
        <Cnt fullW centerV>
          <h2>Mods</h2>
          <Search
            onSearch={(val) => setSearch(val)}
            onEmpty={() => setSearch("")}
            placeholder="Type and wait..."
            disabled={!mods.length}
          />
        </Cnt>
        <br />
        <br />
        <Cnt
          fullW
          container={{ style: { flex: "1", overflowY: "auto" } }}
          silent={!mods.length}
          center={!mods.length}
        >
          {!mods.length ? (
            "No mods"
          ) : (
            <Arr
              items={
                search
                  ? mods.filter((x) =>
                      x.toLowerCase().includes(search.toLowerCase())
                    )
                  : mods
              }
              container={{
                fullW: true,
                centerV: true,
                classNames: ["ModItem"],
              }}
              render={(mod) => (
                <>
                  {mod}
                  <Btn
                    iconPosition={IconPosition.Right}
                    classNames={["AlignRight"]}
                    type={BtnType.Danger}
                    icon={{ name: "trash" }}
                    disabled={serverLock}
                    onClick={() => {
                      setSelectedMod(mod);
                      localStorage.getItem("IgnoreModDeleteDialog") !== "true"
                        ? setShowDeleteDialog(true)
                        : deleteMod(mod);
                    }}
                  >
                    Delete
                  </Btn>
                </>
              )}
            />
          )}
        </Cnt>
        <Cnt />
      </Cnt>
      <Cnt
        classNames={["Upload"]}
        center
        container={{
          onDragOver: (ev) => {
            if (ev.dataTransfer.types.some((x) => x !== "Files")) return;
            ev.preventDefault();
            if (uploadModLock) return;
            setDragMode(DragMode.Over);
          },
          onDragLeave: () => {
            if (uploadModLock) return;
            setDragMode(DragMode.None);
          },
          onDrop: (ev) => {
            ev.preventDefault();
            if (uploadModLock) return;
            setDragMode(DragMode.None);
            var files: (File | null)[] = [];
            if (ev.dataTransfer.items)
              files = [...ev.dataTransfer.items]
                .filter((x) => x.kind === "file")
                .map((x) => x.getAsFile());
            else files = [...ev.dataTransfer.files];
            modSelect(files);
          },
        }}
      >
        {
          [
            <Cnt classNames={["CenterText"]}>
              <Btn
                onClick={() => fileInputRef.current?.click()}
                center
                type={BtnType.Secondary}
                disabled={serverLock}
              >
                Upload new Mod
              </Btn>
              <input
                accept=".jar"
                ref={fileInputRef}
                className="Ghost"
                type="file"
                multiple
                onChange={(ev) =>
                  ev.currentTarget.files &&
                  modSelect([...ev.currentTarget.files])
                }
              />
              <br />
              <Cnt inline silent>
                or
              </Cnt>
              <br />
              <br />
              Drag and Drop file(s) here
            </Cnt>,
            <Cnt classNames={["CenterText"]}>Give me that file ÒwÓ</Cnt>,
            <Cnt classNames={["FilesToUpload"]} fullS>
              <Cnt fullW classNames={["Files"]}>
                <Arr
                  items={filesToUpload}
                  container={{
                    classNames: ["File"],
                    centerV: true,
                    fullW: true,
                  }}
                  render={({ file, completed, err }) => (
                    <>
                      <span>{file.name}</span>
                      <Btn
                        classNames={["AlignRight"]}
                        type={
                          uploadModLock && completed
                            ? err
                              ? BtnType.Danger
                              : BtnType.Success
                            : BtnType.Secondary
                        }
                        iconPosition={IconPosition.Right}
                        icon={{ name: "trash" }}
                        disabled={uploadModLock}
                        loading={
                          uploadModLock && !completed ? "Uploading..." : false
                        }
                        onClick={() => {
                          setFilesToUpload(
                            (_filesToUpload = _filesToUpload.filter(
                              (x) => x.file !== file
                            ))
                          );
                          !_filesToUpload.length && setDragMode(DragMode.None);
                        }}
                      >
                        {completed ? (err ? "Error" : "Uploaded") : "Remove"}
                      </Btn>
                    </>
                  )}
                />
              </Cnt>
              <Cnt fullW classNames={["Btns"]} centerV>
                <Btn onClick={modUpload} disabled={uploadModLock}>
                  Upload
                </Btn>
                <Btn
                  disabled={uploadModLock}
                  onClick={() => {
                    setFilesToUpload((_filesToUpload = []));
                    setDragMode(DragMode.None);
                  }}
                  classNames={["AlignRight"]}
                  type={BtnType.Secondary}
                >
                  Cancel
                </Btn>
              </Cnt>
            </Cnt>,
          ][dragMode]
        }
      </Cnt>
    </Cnt>
  );
};
