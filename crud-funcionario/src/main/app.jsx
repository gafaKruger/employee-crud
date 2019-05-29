import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Navegacao from "../components/template/navegacao";
import Home from "../components/home/home";
import Rodape from "../components/template/footer";

export default props => (
  <Router>
    <div className="site">
      <Home />
      <Navegacao />
      <Routes />
      <Rodape />
    </div>
  </Router>
);
