import React, { Children } from "react";
import Fx from "../Fx";
import "./Cnt.scss";

export enum CntType {
  Primary = "primary",
  Secondary = "secondary",
  Background = "background",
}

export type CntProps = {
  children?: any;
  classNames?: any[];
  type?: CntType;
  center?: boolean;
  centerV?: boolean;
  centerH?: boolean;
  fullS?: boolean;
  fullW?: boolean;
  fullH?: boolean;
  fullSS?: boolean;
  fullSW?: boolean;
  fullSH?: boolean;
  borderR?: boolean;
  caged?: boolean;
  pointer?: boolean;
  silent?: boolean;
  inline?: boolean;
  container?: Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "className"
  >;
};

export default (props: CntProps) => (
  <div
    {...props.container}
    className={Fx.c(
      "MxUI_Cnt_Component",
      ...(props.classNames || []),
      props.type && `type_${props.type}`,
      (props.centerV || props.center) && "centerV",
      (props.centerH || props.center) && "centerH",
      props.fullS && "fullS",
      props.fullW && "fullW",
      props.fullH && "fullH",
      props.fullSS && "fullSS",
      props.fullSW && "fullSW",
      props.fullSH && "fullSH",
      props.borderR && "borderR",
      props.caged && "caged",
      props.pointer && "pointer",
      props.silent && "silent",
      props.inline && "inline",
      props.container?.style?.gap !== undefined &&
        [0, "0", "0px", "0vw"].some((v) => v === props.container?.style?.gap) &&
        "zeroGap"
    )}
    style={props.container?.style || {}}
  >
    {Children.map(props.children, (child, i) =>
      React.isValidElement(child)
        ? React.cloneElement(child, { key: i })
        : child
    )}
  </div>
);
