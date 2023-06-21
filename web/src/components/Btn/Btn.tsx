import { useEffect, useRef, useState, isValidElement } from "react";
import Fx from "../Fx";
import Loader, { LoaderType } from "../Loader/Loader";
import "./Btn.scss";
import Icon, { IconProps } from "../Icon/Icon";

export enum BtnType {
  Primary,
  Secondary,
  Success,
  Warning,
  Danger,
}

export enum IconPosition {
  Left = "left",
  Right = "right",
}

export interface BtnProps {
  children?: string;
  id?: string;
  classNames?: any[];
  type?: BtnType;
  icon?: IconProps | JSX.Element;
  iconPosition?: IconPosition;
  invert?: boolean;
  expand?: boolean;
  loading?: boolean | string;
  disabled?: boolean;
  center?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default (props: BtnProps) => {
  const btnPaddingH = 25,
    contentRef = useRef<HTMLDivElement>(null),
    [btnWidth, setBtnWidth] = useState(0),
    readAndSetBtnWidth = () =>
      contentRef.current &&
      setBtnWidth(
        contentRef.current.offsetWidth +
          (props.loading && typeof props.loading === "string" ? 20 : 0) +
          btnPaddingH * 2
      );

  useEffect(() => {
    setTimeout(readAndSetBtnWidth, 100);
  }, []);

  useEffect(() => {
    readAndSetBtnWidth();
  }, [
    props.loading,
    typeof props.loading === "string",
    props.children,
    props.icon,
  ]);

  return (
    <button
      id={props.id}
      onClick={(ev) => {
        ev.currentTarget.blur();
        !props.disabled && props.onClick && props.onClick(ev);
      }}
      style={
        !props.expand
          ? {
              width:
                props.loading && !(typeof props.loading === "string")
                  ? 60
                  : btnWidth || "max-content",
            }
          : undefined
      }
      className={Fx.c(
        "MxUI_Btn_Component",
        ...(props.classNames || []),
        `type_${BtnType[props.type === undefined ? 0 : props.type]}`,
        props.invert && "invert",
        props.expand && "expand",
        props.loading && "loading",
        typeof props.loading === "string" && "loadingLabel",
        props.center && "center",
        (props.disabled || props.loading) && "disabled"
      )}
    >
      {props.loading && (
        <div className="MxUI_Btn_Component__Loader">
          <Loader
            show
            type={
              props.type === BtnType.Secondary
                ? LoaderType.Text
                : LoaderType.TextOnPrimary
            }
          />
        </div>
      )}
      <div ref={contentRef} className="MxUI_Btn_Component__Content">
        {props.icon &&
          !props.loading &&
          props.iconPosition !== IconPosition.Right && (
            <div
              className={Fx.c(
                "MxUI_Btn_Component__Content__Icon",
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
        {props.loading && typeof props.loading === "string"
          ? props.loading
          : props.children}
        {props.icon &&
          !props.loading &&
          props.iconPosition === IconPosition.Right && (
            <div
              className={Fx.c(
                "MxUI_Btn_Component__Content__Icon",
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
      </div>
    </button>
  );
};
