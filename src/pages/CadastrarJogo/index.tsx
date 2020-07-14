import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

function CadastrarJogo() {
  const history = useHistory();
  function Voltar() {
    history.push("/menu");
  }
  function Sair() {
    history.push("/");
  }
  return (
    <div className="App">
      <div className="logo-top">
        <img src="../../assets/img3.jpg"/>
        <div className="icon-page">
          <img src="https://img.icons8.com/windows/32/000000/address-book.png"/>
          <p>CADASTRAR JOGOS</p>
        </div>
      </div>
      <div className="box-info">
        <div className="minibox-left">
          <div className="topo-left">
            <button className="back" onClick={Voltar} >
              <img
                className="exit-menu"
                src="https://img.icons8.com/metro/26/000000/back.png"
              />
            </button>
            
            <div className="input-description">
              <div>
                <img src="https://img.icons8.com/android/24/000000/king.png"/> <br/>
                <img src="https://img.icons8.com/android/24/000000/hand.png"/>
              </div>
              <div className="name-game">
                <p>Qual o nome do jogo?</p> <input type="text"/>
                <p>Classificação indicativa?</p><input type="text" />
              </div>
              
            </div>
            <div className="info-game">
              <div >
                <p>Insira uma imagem</p>
                <div className="game-picture">
                  <img src="https://img.icons8.com/android/24/000000/dice.png"/>
                </div>
              </div>
              <div className="note">
                <p>Adicione alguma observação</p><br/>
                <textarea></textarea>
              </div>
            </div>
            
            <div className="warning">
              <p>*Se o jogo estiver faltando peça ou danificado, não será cadastrado para <br/>
              empréstimo.</p>
            </div>
          </div>
          
        </div>
        <div className="line-center"></div>
        <div className="minibox-right">
          <div className="info-user">
            <div className="name">
              <p>Nome de usuário</p>
            </div>
            <div className="name-user">
              <p>Renan22</p> 
            </div>
            <div className="picture-user">
            <img src="https://img.icons8.com/pastel-glyph/64/000000/user-male--v1.png"/>
            </div>
          </div>
          <div className="term">
            <p>
              Ao clicar em CADASTRAR JOGO, você está ciente que o seu jogo <br/>
              deve estar inteiramente qualificado para empréstimo, <br/>
              obedecendo os <a href=""> termos de empéstimo</a> estabelecidos pelo <br/>
              AluGAMES. <br/> <br/>
              Assim que algum usuário interessado pelo jogo aceitar o <br/>
              empréstimo, você poderá contatálo diretamente pelo nosso <br/>
              Chat, acertando diretamente o procedimento para empréstimo <br/>
              como prazo, características dos jogos, pagamentos (caso <br/>
              necessário) e local para acesso ao jogo, ficando o conteúdo do <br/>
              diálogo privado à vocês. o que for acordado ente ambos será <br/>
              inteiramente e totalmente responsabilidade sua. <br/>
            </p>
          </div>
          <div className="register">
            <button> CADASTRAR </button>
          </div>
        </div>
      </div>
      <div className="exit-page">
        <button onClick={Sair}> <img src="https://img.icons8.com/android/24/000000/logout-rounded-left.png"/> <p>SAIR</p></button>
      </div>
    </div>
    
  );
}

export default CadastrarJogo;
