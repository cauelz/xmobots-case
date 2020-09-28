import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './components/FormularioCadastro/Login';
import Form from './components/FormularioCadastro/FormularioCadastro';
import PaginaInicial from './components/PaginaInicial/PaginaInicial';

export default props => {
    return (
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/cadastro' component={Form}/>
            <Route path='/inicio' component={PaginaInicial}/>
            <Redirect from='*' to='/' />
        </Switch>
    );
}