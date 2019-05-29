import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./../components/home/home";
import Funcionario from "./../components/funcionarios/funcionarios";

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/funcionarios" component={Funcionario} />
    <Redirect from="*" to="/" />
  </Switch>
);
