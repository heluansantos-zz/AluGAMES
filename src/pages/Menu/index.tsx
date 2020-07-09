import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

function Menu() {
  const history = useHistory();
  function Sair() {
    history.push("/");
  }
  function ListarJogos() {
    history.push("/listarjogos");
  }
  function CadastrarJogo() {
    history.push("/cadastrarjogo");
  }
  function Perfil() {
    history.push("/perfil");
  }
  return (
    <div className="App">
      <p className="Title">Menu</p>
      <button className="ButtonMenu" onClick={ListarJogos}>
        Listar Jogos
      </button>
      <button className="ButtonMenu" onClick={CadastrarJogo}>
        Cadastrar Jogo
      </button>
      <button className="ButtonMenu" onClick={Perfil}>
        Perfil
      </button>
      <button className="ButtonMenu" onClick={Sair}>
        Sair
      </button>
    </div>
  );
}

export default Menu;
