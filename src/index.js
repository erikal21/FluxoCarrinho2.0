import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './Fluxo/Home'
import Detalhes from './Fluxo/Carrinho'
import Carrinho from './Fluxo/Detalhes'
import Produtos from './Fluxo/Produtos'


ReactDOM.render(
  <React.StrictMode>
   <Switch>
        <Route path="/apresentacao" exact={true} component={Home} />
        <Route path="/detalhes" exact={true} component={Detalhes} />
        <Route path="/carrinho" exact={true} component={Carrinho} />
        <Route path="/produtos" exact={true} component={Produtos} />
    </Switch>
  </React.StrictMode>
);


