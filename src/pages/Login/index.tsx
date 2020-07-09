import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

function Login() {
  const history = useHistory();
  function login() {
    history.push("/menu");
  }
  return (
    <div className="App">
      <p className="Title">ALUGAMES</p>
      <form className="Form">
        <input type="e-mail" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button className="ButtonLogin" type="submit" onClick={login}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
