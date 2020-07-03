import React from "react";
import "./styles.css";

function Login() {
  return (
    <div className="App">
      <p className="Title">AluGAMES</p>
      <form className="Form">
        <label htmlFor="">User</label>
        <input type="Usuário" />
        <label htmlFor="">User</label>
        <input type="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
