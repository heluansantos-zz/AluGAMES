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
      <div id="form-one">
        <img id="logo-center" src="../../assets/logo-center.png"/>
        <form className="Form">
          <label>Usuário</label>
          <input id="enter-text" type="e-mail" placeholder="E-mail" /><br></br>

          <label>Senha</label>
          <input id="enter-text" type="password" placeholder="Senha" /><br></br>
          <button className="ButtonLogin" type="submit" onClick={login}>
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
