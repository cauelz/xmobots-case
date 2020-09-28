function validarSenha(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
        return {status:true, text:"As senhas precisam ser iguais"};
    } else {
        return {status:false};
    }
}

function validarEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validarNome(nome) {
    if(nome.length < 3 || nome.length > 72) {
        return true;
    } else {
        return false
    }
}
function validarSobrenome(sobrenome) {
    if(sobrenome.length < 3 || sobrenome.length > 72) {
        return true;
    } else {
        return false
    }
}

export {validarEmail, validarSenha, validarNome, validarSobrenome};