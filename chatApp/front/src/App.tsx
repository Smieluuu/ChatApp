import Chat from "./components/Chat";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [confirmedNickname, setConfirmedNickname] = useState<string>("");

  const handlerLogin = (nickname: string) => {
    setConfirmedNickname(nickname);
  };

  return (
    <div className="App">
      {confirmedNickname && <Chat nickname={confirmedNickname} />}
      {!confirmedNickname && <Login onLogin={handlerLogin} />}
    </div>
  );
}

export default App;
