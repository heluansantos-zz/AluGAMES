import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import logoUm from "../../assets/logo-um.png";

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
      <div className="flex-menu">
        <div className="l-e-sbv">
          <img src={logoUm} alt="Imagem de logo" height={80} />
          <p className="sbv">
            Seja bem vindo! <span>USUÁRIO</span>
          </p>
        </div>
        <button className="imagem-perfil">Aqui perfil</button>
      </div>
      <button className="ButtonMenu" onClick={Perfil}>
        <img
          className="imgs-opt"
          src="https://img.icons8.com/metro/40/000000/user-male.png"
        />
        <p className="btmt">MEU PERFIL</p>
      </button>
      <br></br>
      <button className="ButtonMenu" onClick={CadastrarJogo}>
        <img
          className="imgs-opt"
          src="https://img.icons8.com/metro/40/000000/address-book.png"
        />
        <p className="btmt">CADASTRAR JOGOS</p>
      </button>
      <br></br>
      <button className="ButtonMenu" onClick={ListarJogos}>
        <img
          className="imgs-opt"
          src="https://img.icons8.com/ios-filled/40/000000/design.png"
        />
        <p className="btmt">SOLICITAR EMPRÉSTIMOS</p>
      </button>
      <br></br>
      <button className="exit" onClick={Sair}>
        <img
          className="exit-menu"
          src="https://img.icons8.com/small/21/000000/exit.png"
        />
        <img
          className="exit-hidden"
          src="https://img.icons8.com/android/20/000000/long-arrow-right.png"
        />
        SAIR
      </button>
    </div>
  );
}

export default Menu;
