import { RefObject, useState, useEffect, createRef } from "react";
import { createPortal } from "react-dom";
import "./Toast.scss";
import Btn, { BtnProps } from "../Btn/Btn";
import Icon, { IconSize } from "../Icon/Icon";
import Arr from "../Arr/Arr";
import Fx from "../Fx";

const xport = { _render: <></>, addToast: (_props: ToastProps) => {} };

enum ToastAnimationState {
  SlideIn,
  Show,
  SlideOut,
}

export interface ToastProps {
  title?: string;
  children?: any;
  btns?: BtnProps[];
  hideAfter?: number;
  onClose?: () => void;
}

type Toast = ToastProps & {
  id: string;
  state: ToastAnimationState;
  ref: RefObject<HTMLDivElement>;
};

var _toasts: Toast[] = [];

const Toast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]),
    [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(
      _toasts
        .map((toast) => toast.ref.current?.offsetHeight || 0)
        .reduce((prev, height) => prev + height + 20, 0)
    );
  }, [toasts]);

  const closeToast = async (id: string, cb?: ToastProps["onClose"]) => {
    cb && cb();
    setToasts(
      (_toasts = _toasts.map((toast) =>
        toast.id === id
          ? { ...toast, state: ToastAnimationState.SlideOut }
          : toast
      ))
    );
    await Fx.sleep(300);
    setToasts((_toasts = _toasts.filter((toast) => toast.id !== id)));
  };

  xport.addToast = async (props: ToastProps) => {
    const obj = {
      ...props,
      id: crypto.randomUUID(),
      ref: createRef<HTMLDivElement>(),
      state: ToastAnimationState.SlideOut,
    };
    setToasts((_toasts = [...toasts, obj]));
    await Fx.sleep(200);
    setToasts(
      (_toasts = _toasts.map((toast) =>
        toast.id === obj.id
          ? { ...toast, state: ToastAnimationState.SlideIn }
          : toast
      ))
    );
    await Fx.sleep(300);
    setToasts(
      (_toasts = _toasts.map((toast) =>
        toast.id === obj.id
          ? { ...toast, state: ToastAnimationState.Show }
          : toast
      ))
    );
    if (!props.hideAfter) return;
    await Fx.sleep(props.hideAfter);
    closeToast(obj.id, obj.onClose);
  };

  return createPortal(
    <div
      className="MxUI_Toast_Component"
      style={{
        height: height,
        ...(toasts.length === 1
          ? {
              transition: "none",
            }
          : {}),
        ...(!toasts.some(
          (toast) => toast.state === ToastAnimationState.SlideOut
        )
          ? {
              justifyContent: "flex-end",
            }
          : {}),
      }}
    >
      <Arr
        items={toasts}
        render={(toast) => (
          <div
            ref={toast.ref}
            className={Fx.c(
              "MxUI_Toast_Component__Item",
              `state-${toast.state}`
            )}
            style={toasts.length === 1 ? { animationDelay: "0s" } : undefined}
          >
            <div className="MxUI_Toast_Component__Item__Content">
              <div className="MxUI_Toast_Component__Item__Content__Title">
                {toast.title}
              </div>
              <div className="MxUI_Toast_Component__Item__Content__Body">
                {toast.children}
              </div>
            </div>
            {toast.btns && (
              <div className="MxUI_Toast_Component__Item__Btns">
                <Arr
                  items={toast.btns.map((x) => (
                    <Btn {...x} />
                  ))}
                />
              </div>
            )}
            {!toast.hideAfter && (
              <div className="MxUI_Toast_Component__Item__Close">
                <Icon
                  name="x"
                  size={IconSize.XS}
                  onClick={() => closeToast(toast.id, toast.onClose)}
                />
              </div>
            )}
          </div>
        )}
      />
    </div>,
    document.body
  );
};

xport._render = <Toast />;

export default xport;
