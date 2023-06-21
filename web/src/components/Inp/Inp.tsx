import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  isValidElement,
} from "react";
import "./Inp.scss";
import Icon, { IconProps, IconSize } from "../Icon/Icon";
import Fx from "../Fx";

export enum InpType {
  Text = "text",
  Password = "password",
  Number = "number",
}

export enum IconPosition {
  Left = "left",
  Right = "right",
}

type BasedOnType =
  | {
      type?: Exclude<InpType, InpType.Number | InpType.Password> | never;
      onChange?: (val: string) => void;
      value?: string;
      match?: string;
    }
  | {
      type: InpType.Number;
      onChange?: (val: number) => void;
      value?: number;
      match?: number;
    }
  | {
      type: InpType.Password;
      onChange?: (val: string) => void;
      value?: string;
      match?: string;
      noShowPassword?: boolean;
    };

export type InpProps = {
  id?: string;
  classNames?: any[];
  placeholder?: string;
  disabled?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onChange?: (val: undefined) => void;
  onEnterKey?: () => void;
  icon?: IconProps | JSX.Element;
  iconPosition?: IconPosition;
  expand?: boolean;
  center?: boolean;
  max?: number;
  min?: number;
  autoErr?: boolean;
} & BasedOnType;

export interface InpRef {
  readonly value: any;
  vld: () => boolean;
}

export default forwardRef<InpRef, InpProps>((props: InpProps, ref) => {
  const inpRef = useRef<HTMLInputElement>(null),
    [showPassword, setShowPassword] = useState(false),
    [showErr, setShowErr] = useState(false),
    [err, setErr] = useState("");

  const vld = () => {
    const isValid = (() => {
      if (!inpRef.current) return false;
      const value = inpRef.current.value;
      switch (props.type || InpType.Text) {
        case InpType.Password:
        case InpType.Text:
          if (typeof value !== "string" || !value || !value.trim())
            return false;
          if (props.match !== undefined && value !== props.match) return false;
          if (props.max && value.length > props.max) return false;
          if (props.min && value.length < props.min) return false;
          return true;
        case InpType.Number:
          const valueAsNum = inpRef.current.valueAsNumber;
          if (typeof valueAsNum !== "number") return false;
          if (props.match !== undefined && value !== props.match) return false;
          if (props.max !== undefined && valueAsNum > props.max) return false;
          if (props.min !== undefined && valueAsNum < props.min) return false;
          return true;
        default:
          throw new Error("Invalid Inp type for validation");
      }
    })();
    if (props.autoErr) {
      if (!isValid) {
        var err = "Needs to be";
        if (props.match !== undefined) {
          err += JSON.stringify(props.match);
        } else if (props.max !== undefined && props.min !== undefined) {
          err += `between ${props.min} and ${props.max}${
            props.type !== InpType.Number ? " characters long" : ""
          }`;
        } else if (props.max !== undefined) {
          err += `at most ${props.max}${
            props.type !== InpType.Number ? " characters long" : ""
          }`;
        } else if (props.min !== undefined) {
          err += `at least ${props.min}${
            props.type !== InpType.Number ? " characters long" : ""
          }`;
        } else {
          err += "filled out";
        }
        setErr(err);
        setShowErr(true);
      } else if (showErr) setShowErr(false);
    }
    return isValid;
  };

  useImperativeHandle(
    ref,
    () =>
      ({
        get value() {
          return props.type === InpType.Number
            ? inpRef.current?.valueAsNumber
            : inpRef.current?.value;
        },
        vld: () => vld(),
      } as any)
  );

  return (
    <div
      id={props.id}
      className={Fx.c(
        "MxUI_Inp_Component",
        ...(props.classNames || []),
        props.expand && "expand",
        props.center && "center",
        props.disabled && "disabled"
      )}
    >
      <div className="MxUI_Inp_Component__Wrapper">
        {props.icon && (
          <div
            className={Fx.c(
              "MxUI_Inp_Component__Wrapper__Icon",
              `Position_${
                props.iconPosition === undefined
                  ? IconPosition.Left
                  : props.iconPosition
              }`
            )}
          >
            {isValidElement(props.icon) ? (
              props.icon
            ) : (
              <Icon {...(props.icon as IconProps)} />
            )}
          </div>
        )}
        {props.type === InpType.Password && !props.noShowPassword && (
          <div
            className={Fx.c(
              "MxUI_Inp_Component__Wrapper__Icon",
              `Position_${IconPosition.Right}`
            )}
          >
            <Icon
              size={IconSize.S}
              name={showPassword ? "eye-off" : "eye"}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        )}
        <input
          ref={inpRef}
          placeholder={props.placeholder}
          disabled={props.disabled}
          type={
            props.type === InpType.Number
              ? "number"
              : props.type === InpType.Password && !showPassword
              ? "password"
              : "text"
          }
          onBlur={() => {
            props.onBlur && props.onBlur();
            props.autoErr && vld();
          }}
          onFocus={props.onFocus}
          onKeyDown={(ev) =>
            ev.key === "Enter" && props.onEnterKey && props.onEnterKey()
          }
          onChange={(ev) => {
            if (props.disabled) return ev.preventDefault();
            showErr && props.autoErr && vld();
            props.onChange &&
              props.onChange(
                (props.type === InpType.Number
                  ? ev.target.valueAsNumber
                  : ev.target.value) as never
              );
          }}
        />
      </div>
      {props.autoErr && (
        <div className={Fx.c("MxUI_Inp_Component__Err", showErr && "show")}>
          {err}
        </div>
      )}
    </div>
  );
});
