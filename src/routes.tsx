import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import CadastrarJogo from "./pages/CadastrarJogo";
import SolicitarJogo from "./pages/SolicitarJogo";
import Chat from "./pages/Chat";
import ListarJogos from "./pages/ListarJogos";
import Perfil from "./pages/Perfil";

export default function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" component={Login} exact />
        <Route path="/menu" component={Menu} />
        <Route path="/cadastrarjogo" component={CadastrarJogo} />
        <Route path="/solicitarjogo" component={SolicitarJogo} />
        <Route path="/listarjogos" component={ListarJogos} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/chat" component={Chat} />
    </BrowserRouter>
  );
}
