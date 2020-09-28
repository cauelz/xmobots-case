function validarSenha(password, passwordConfirmation) {
    if (password !== passwordConfirmation && (password.length < 4 || password.length > 72) ) {
        return false;
    } else {
        return true;
    }
}

function validarEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validarNome(nome) {

}

export {validarEmail, validarSenha, validarNome};