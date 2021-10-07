import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Apresentacao from './Fluxo/apresentacao'
import Detalhes from './Fluxo/carrinho'
import Carrinho from './Fluxo/detalhes'
import Produtos from './Fluxo/produtos'


ReactDOM.render(
  <React.StrictMode>
   <Switch>
        <Route path="/apresentacao" exact={true} component={Apresentacao} />
        <Route path="/detalhes" exact={true} component={Detalhes} />
        <Route path="/carrinho" exact={true} component={Carrinho} />
        <Route path="/produtos" exact={true} component={Produtos} />
    </Switch>
  </React.StrictMode>
);


