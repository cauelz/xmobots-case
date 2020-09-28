import React, { Fragment } from 'react';
import Nav from './Nav/Nav'
import Mapa from './Map/Mapa'


export default function PaginaInicial() {
    return (
        <Fragment>
            <Nav></Nav>
            <Mapa></Mapa>
        </Fragment>
    );
} 