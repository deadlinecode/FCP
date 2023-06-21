import "./Divider.scss";

export interface DividerProps {
  children?: string;
  width?: string;
  margin?: string;
}

export default (props: DividerProps) => (
  <div
    className="MxUI_Divider_Component"
    style={{
      width: props.width,
      margin: props.margin,
    }}
  >
    {props.children && <span>{props.children}</span>}
  </div>
);
