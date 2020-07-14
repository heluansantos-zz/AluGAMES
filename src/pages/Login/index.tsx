import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import logoUm from "../../assets/logo-um.png";
import logoCenter from "../../assets/logo-center.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit() {
    if (
      (email === "fernando" && password === "fernando") ||
      (email === "heluan" && password === "heluan") ||
      (email === "renan" && password === "renan") ||
      (email === "ruan" && password === "ruan") ||
      (email === "admin" && password === "admin")
    ) {
      history.push("/menu");
    } else {
      alert("Login ou senha incorreto!");
    }
  }
  const history = useHistory();

  return (
    <div className="App">
      <div className="flex">
        <img src={logoUm} alt="Imagem de logo" height="55" />
        <button className="botao-ajuda">AJUDA</button>
      </div>
      <div className="form-one">
        <img className="logo-center" src={logoCenter} alt="logo" height="25" />
        <form className="Form" onSubmit={handleSubmit}>
          <label>Usuário</label>
          <input
            className="enter-text"
            type="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Senha</label>
          <input
            className="enter-text"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button
            className="ButtonLogin"
            type="submit"
            disabled={!validateForm()}
          >
            ENTRAR
          </button>
        </form>
        <div className="flex-1">
          <a href="#">Novo cadastro</a>
          <a href="#">Esqueci a senha</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
