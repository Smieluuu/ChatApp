import { Props } from "./index.types";
import React, { useState } from "react";

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [nickname, setNickname] = useState<string>("");

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(nickname);
  };

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <form className="Login" onSubmit={handlerSubmit}>
      <input type="text" value={nickname} onChange={handlerChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
