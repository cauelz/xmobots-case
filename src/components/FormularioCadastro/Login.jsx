import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container'
import './Login.css'

export default function Login(props) {
    return (
        <Container component="article" maxWidth="sm">
            <h1>Faça o seu Login</h1>
            <TextField
                id="email"
                type="email"
                label="E-mail"
                variant="outlined"
                margin="normal"
                required
                fullWidth />
            <TextField
                id="password"
                label="Senha"
                variant="outlined"
                margin="normal"
                type="password"
                autoComplete="new-password"
                required fullWidth />

            <Link
                
                className="buttonEntrar"
                to="/inicio"
                type="submit"
                name="action">
                    Entrar
            </Link>

            <Typography>
                    <Link to="/cadastro" color="primary" variant="body2">Cadastre-se</Link>
            </Typography>
        </Container>
    );
}