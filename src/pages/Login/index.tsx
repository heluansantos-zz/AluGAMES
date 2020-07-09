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
      <div id="flex">
        <img src="/assets/logo-um.png" alt="Imagem de logo"/>
        <button id="botao-ajuda">AJUDA</button>
      </div>
      <div id="form-one">
        <img id="logo-center" src="../../assets/logo-center.png"/>
        <form className="Form">
          <label>Usuário</label>
          <input id="enter-text" type="e-mail" /><br></br>
          <br></br>
          <label>Senha</label>
          <input id="enter-text" type="password" /><br></br>
          <button className="ButtonLogin" type="submit" onClick={login}>
            ENTRAR
          </button>
        </form>
        <div id="flex-1">
          <a href="#">Novo cadastro</a>
          <a href="#">Esqueci a senha</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
