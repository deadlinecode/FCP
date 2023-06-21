import Btn, { BtnProps } from "../Btn/Btn";
import { createPortal } from "react-dom";
import Fx from "../Fx";
import Icon from "../Icon/Icon";
import Arr from "../Arr/Arr";
import "./Dialog.scss";

export interface DialogProps {
  title?: string;
  children?: any;
  btns?: BtnProps[];
  show?: boolean;
  onClose?: () => void;
}

export default (props: DialogProps) =>
  createPortal(
    <div className={Fx.c("MxUI_Dialog_Component", props.show && "show")}>
      <div className="MxUI_Dialog_Component__Box">
        <div className="MxUI_Dialog_Component__Box__Header">
          <div className="MxUI_Dialog_Component__Box__Header__Title">
            <h3>{props.title}</h3>
          </div>
          <div className="MxUI_Dialog_Component__Box__Header__Close">
            <Icon name="x" onClick={props.onClose} />
          </div>
        </div>
        {props.children && (
          <>
            <div className="MxUI_Dialog_Component__Box__Body">
              {props.children}
            </div>
          </>
        )}
        {props.btns && (
          <div className="MxUI_Dialog_Component__Box__Footer">
            <Arr
              items={props.btns.map((x) => (
                <Btn {...x} />
              ))}
            />
          </div>
        )}
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
