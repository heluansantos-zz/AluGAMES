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
      <div id="flex-menu">
        <div className="l-e-sbv">
        <img src="/assets/logo-um.png" alt="Imagem de logo"/>
        <p id="sbv">Seja bem vindo! <span>USUÁRIO</span></p>
        </div>
        <button id="imagem-perfil">Aqui perfil</button>
      </div>
      <button className="ButtonMenu" onClick={Perfil}><img className="imgs-opt" src="https://img.icons8.com/metro/40/000000/user-male.png"/>
        <p className="btmt">MEU PERFIL</p>
      </button><br></br>
      <button className="ButtonMenu" onClick={CadastrarJogo}><img className="imgs-opt" src="https://img.icons8.com/metro/40/000000/address-book.png"/>
      <p className="btmt">CADASTRAR JOGOS</p>
      </button><br></br>
      <button className="ButtonMenu" onClick={ListarJogos}><img className="imgs-opt" src="https://img.icons8.com/ios-filled/40/000000/design.png"/>
      <p className="btmt">SOLICITAR EMPRÉSTIMOS</p>
      </button><br></br>
      <button className="exit" onClick={Sair}><img id="exit-menu" src="https://img.icons8.com/small/21/000000/exit.png"/>
        SAIR
      </button>
    </div>
  );
}

export default Menu;
