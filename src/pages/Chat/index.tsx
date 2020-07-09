import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

function Chat() {
  const history = useHistory();
  function Voltar() {
    history.push("/menu");
  }
  return (
    <div className="App">
      <p className="Title">Chat</p>
      <button onClick={Voltar}>Voltar</button>
    </div>
  );
}

export default Chat;
