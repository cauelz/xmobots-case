import React, {useState} from 'react';
import {validarSenha, validarEmail, validarNome, validarSobrenome} from '../../Models/cadastro';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

export default function FormularioCadastro() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    return (
        <Container component="article" maxWidth="sm">

            <h1>Formulário de Cadastro</h1>
            <form>
                <TextField
                    value={nome}
                    onChange={(event) => {
                        setNome(event.target.value)
                    }}
                    onBlur={(event) => {
                        validarNome(nome)
                    }}
                    id="nome"
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth />

                <TextField
                    value={sobrenome}
                    onChange={(event) => {
                        setSobrenome(event.target.value)
                    }}
                    onBlur={(event) => {
                        validarSobrenome(sobrenome)
                    }}
                    id="sobrenome"
                    label="Sobrenome"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth />

                <TextField
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                    onBlur={(event) => {
                        validarEmail(email)
                    }}
                    error={!validarEmail(email)}
                    id="email"
                    type="email"
                    label="E-mail"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth />

                <TextField
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    id="password"
                    label="Senha"
                    variant="outlined"
                    margin="normal"
                    type="password"
                    autoComplete="new-password"
                    required fullWidth />

                <TextField
                    value={passwordConfirmation}
                    onChange={(event) => {
                        event.preventDefault();
                        setPasswordConfirmation(event.target.value);
                    }}
                    onBlur={(event) => {
                        validarSenha(password, passwordConfirmation);
                    }}
                    error={validarSenha(password, passwordConfirmation).status}
                    helperText={validarSenha(password, passwordConfirmation).text}
                    id="passwordConfirmation"
                    label="Confirmação de senha"
                    variant="outlined"
                    margin="normal"
                    type="password"
                    autoComplete="new-password"
                    required fullWidth />

                <Button 
                    type="submit"
                    name="action"
                    variant="contained" 
                    color="primary"
                    disabled={!validarEmail(email)}
                    >
                    Cadastrar
                </Button>
                <Typography>
                    <Link to="/" color="primary" variant="body2">Faça Login</Link>
                </Typography>
            </form>
        </Container>
    );
}