//Spread Operator

let frutas = ["maça", "banana", "uva"];

let frutasDois = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutasDois];

console.log(listaCompleta);

let pessoa = {
    nome: "Vinicius",
    idade: 22
}

let infoPessoal = {
    tel:"123456789",
    rg: 2814051,
    ...pessoa
}

let pessoaCompleta = {
    endereco: "rua dos bobos",
    ...infoPessoal
}

console.log(pessoaCompleta);



function letras(...paramns){
    console.log(paramns)
}

letras("a", "b", "c")