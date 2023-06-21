import { useState } from "react";
import Icon, { IconSize, IconType } from "../Icon/Icon";
import "./Toggle.scss";
import Fx from "../Fx";

export enum ToggleType {
  Checkbox = "checkbox",
  Toggle = "toggle",
}

export interface ToggleProps {
  id?: string;
  classNames?: any[];
  checked?: boolean;
  type?: ToggleType;
  onChange?: (val: boolean) => void;
}

export default (props: ToggleProps) => {
  const [_checked, setChecked] = useState(false);

  return (
    <div
      id={props.id}
      className={Fx.c(
        "MxUI_Toggle_Component",
        ...(props.classNames || []),
        (props.checked !== undefined ? props.checked : _checked) && "checked",
        `type_${props.type !== undefined ? props.type : ToggleType.Toggle}`
      )}
      onClick={() => {
        props.onChange &&
          props.onChange(
            !(props.checked !== undefined ? props.checked : _checked)
          );
        props.checked === undefined && setChecked(!_checked);
      }}
    >
      {props.type === undefined || props.type === ToggleType.Toggle ? (
        <label className="MxUI_Toggle_Component__Switch">
          <input
            type="checkbox"
            onClick={(ev) => ev.stopPropagation()}
            checked={props.checked !== undefined ? props.checked : _checked}
          />
          <span className="MxUI_Toggle_Component__Slider" />
        </label>
      ) : (
        <Icon type={IconType.Bolder} size={IconSize.S} name="check" />
      )}
    </div>
  );
};
