import { useRef, useEffect, useState } from "react";
import Fx from "../Fx";
import "./Loader.scss";

export enum LoaderType {
  Primary = "primary",
  Secondary = "secondary",
  Text = "text",
  TextOnPrimary = "textOnPrimary",
  Background = "background",
}

export interface LoaderProps {
  type?: LoaderType;
  fullCover?: boolean;
  show?: boolean;
}

export default (props: LoaderProps) => {
  const [show, setShow] = useState(props.show),
    onCycle = useRef<() => void>(() => null);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      className={Fx.c(
        "MxUI_Loader_Component",
        `type_${props.type || LoaderType.Primary}`,
        props.fullCover && "fullCover",
        show && "show"
      )}
      onAnimationIteration={() => onCycle.current()}
    >
      <span />
    </div>
  );
};
