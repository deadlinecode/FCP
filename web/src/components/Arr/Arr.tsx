import Cnt, { CntProps } from "../Cnt/Cnt";

export interface ArrProps<T> {
  items: T[];
  container?: CntProps;
  onClick?: (item: T, ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  render?: (item: T) => any;
  addAfter?: (() => any) | any;
  addBefore?: (() => any) | any;
}

export default <T extends unknown>(props: ArrProps<T>) => (
  <>
    {props.items.map((item, i) => (
      <Cnt
        {...props.container}
        key={i}
        container={{
          onClick: (ev) => props.onClick && props.onClick(item, ev),
        }}
      >
        {props.addBefore && typeof props.addBefore === "function"
          ? props.addBefore()
          : props.addBefore}
        {props.render ? props.render(item) : <>{item}</>}
        {props.addAfter && typeof props.addAfter === "function"
          ? props.addAfter()
          : props.addAfter}
      </Cnt>
    ))}
  </>
);
