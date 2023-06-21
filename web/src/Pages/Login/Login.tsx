import { useRef, useState } from "react";
import Btn from "../../components/Btn/Btn";
import Cnt from "../../components/Cnt/Cnt";
import Toast from "../../components/Toast/Toast";
import Inp, { InpRef, InpType } from "../../components/Inp/Inp";
import "./Login.scss";

export default () => {
  const [loggingIn, setLoggingIn] = useState(false),
    usernameRef = useRef<InpRef>(null),
    passwordRef = useRef<InpRef>(null);

  const login = async () => {
    const usernameInp = usernameRef.current,
      passwordInp = passwordRef.current;
    if (!usernameInp || !passwordInp) return;
    const vld = [usernameInp.vld(), passwordInp.vld()];
    if (vld.includes(false)) return;
    setLoggingIn(true);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameInp.value,
        password: passwordInp.value,
      }),
    });
    if (res.ok) return (window.location.href = "/app");
    setLoggingIn(false);
    Toast.addToast({
      title: "Error while logging in",
      children: <Cnt silent>{(await res.text()) || "Unknown error"}</Cnt>,
    });
  };

  return (
    <Cnt classNames={["Login"]} fullS center>
      <Cnt>
        <img src="/icon.jpg" alt="" />
        <br />
        <br />
        <h2>
          F
          <Cnt silent inline>
            orge
          </Cnt>{" "}
          C
          <Cnt silent inline>
            ontrol
          </Cnt>{" "}
          P
          <Cnt silent inline>
            anel
          </Cnt>
        </h2>
        <br />
        <br />
        <Inp
          ref={usernameRef}
          placeholder="Username"
          icon={{ name: "user" }}
          min={1}
          autoErr
        />
        <br />
        <Inp
          ref={passwordRef}
          placeholder="Password"
          icon={{ name: "lock" }}
          min={1}
          autoErr
          type={InpType.Password}
        />
        <br />
        <br />
        <Btn center onClick={login} loading={loggingIn}>
          Login
        </Btn>
      </Cnt>
    </Cnt>
  );
};
