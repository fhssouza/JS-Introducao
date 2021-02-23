function saudacao(nome){
    let mensagem = "Olá seja bem vindo";

    function juntarNome(){
        return mensagem + ' ' + nome;
    }

    return juntarNome();
}

console.log(saudacao('vinicius'));
