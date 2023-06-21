import { useRef, useState } from "react";
import Inp, { IconPosition, InpProps, InpRef } from "../Inp/Inp";
import Spinner from "./Spinner";
import "./Search.scss";
import Arr from "../Arr/Arr";
import Cnt, { CntType } from "../Cnt/Cnt";

var timeout = 0,
  ctrls: AbortController[] = [];

class AbortError {
  name = "AbortError";
}

export interface RecomItem {
  label: string;
  onSelect?: () => void;
}

export type SearchProps = {
  recoms?: RecomItem[];
  alwaysShowRecoms?: boolean;
  onSearch?: (val: string, abort: AbortController) => Promise<unknown> | void;
  onEmpty?: () => void;
} & Omit<InpProps, "onEnterKey" | "icon" | "iconPosition" | "ref">;

export default (props: SearchProps) => {
  const [loading, setLoading] = useState(false),
    [showRecoms, setShowRecoms] = useState(false),
    inpRef = useRef<InpRef>(null);

  const searchFx = async (val: string) => {
      if (!props.onSearch) return;
      const ctrl = new AbortController();
      setLoading(true);
      ctrls.push(ctrl);
      try {
        ctrl.signal.onabort = () => {
          throw new AbortError();
        };
        await props.onSearch(val, ctrl);
      } catch (err: any) {
        if (err.name === "AbortError") return;
        throw err;
      }
      setLoading(false);
    },
    onSearch = (val: string, skipTimeout?: boolean) => {
      clearTimeout(timeout);
      ctrls = ctrls.filter((ctrl) => typeof ctrl.abort() === "string");
      if (!val || !val.trim()) {
        props.onEmpty && props.onEmpty();
        return setLoading(false);
      }
      skipTimeout
        ? searchFx(val)
        : (timeout = setTimeout(() => searchFx(val), 300) as any);
    };

  return (
    <div className="MxUI_Search_Component">
      <Inp
        placeholder="Search..."
        {...(props as any)}
        ref={inpRef}
        classNames={props.classNames || []}
        iconPosition={IconPosition.Left}
        icon={loading ? Spinner : { name: "search" }}
        onBlur={() => setShowRecoms(false)}
        onFocus={() => setShowRecoms(true)}
        onChange={(val) => {
          props.onChange && props.onChange(val as any);
          onSearch(val || "");
        }}
        onEnterKey={() =>
          inpRef.current && onSearch(inpRef.current.value, true)
        }
      />
      {props.recoms !== undefined && (
        <Cnt
          classNames={[
            "MxUI_Search_Component__Recommendations",
            (props.alwaysShowRecoms || showRecoms) && "show",
          ]}
          type={CntType.Secondary}
          borderR
          fullW
        >
          <Arr
            items={props.recoms || []}
            onClick={(item) => item.onSelect && item.onSelect()}
            render={(item) => item.label}
            container={{
              classNames: [
                "MxUI_Search_Component__Recommendations__Item",
                true && "asdf",
              ],
              centerV: true,
              pointer: true,
            }}
          />
        </Cnt>
      )}
    </div>
  );
};
