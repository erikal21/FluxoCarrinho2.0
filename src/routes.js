import {Switch, BrowserRouter, Route} from 'react-router-dom'


import Produto from './fluxo/produto'
import Home from './fluxo/home'
//import Carrinho from './pages/carrinho/contador'
// import Detalhe from './pages/detalheproduto'


export default function Rotas(){
    return(
     <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            {/* <Route path="/detalhe" exact={true} component={Detalhe} /> */}
            <Route path="/Produto" exact={true} component={Produto} />
        </Switch>
     </BrowserRouter>
    );
}