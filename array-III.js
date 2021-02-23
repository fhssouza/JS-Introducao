let numerosPares = [2,4,6,8,10];

//map (percorre o array e retorna um novo array modificado)
let numerosParesDobro = numerosPares.map(function(valor){
    return valor * 2
})

console.log(numerosParesDobro);

//find (retorna o valor do primeiro elemento do array buscado, caso não encontre nada, vai ser retornado undefined)

var frutas = ["uva", "maça", "cereja", "morango", "abacaxi"];
var moraNoMar = frutas.find(function(fruta){
    return fruta == "abacaxi";
})

console.log(moraNoMar);


//filter (filtra os elementos de acordo com uma condição que existe no callback)

let numerosFiltrados = numerosPares.filter(function(valor){
    return valor < 6 
});

console.log(numerosFiltrados);

//reduce (percorre o array e retorna um único valor)

let somaPares = numerosPares.reduce(function(acum, valor){
    return acum + valor
});

console.log(somaPares);

//forEach (recebe um retorno de chamada como parâmetro)

numerosPares.forEach(function(valor, indice){
    console.log("O indice " + indice + " tem o valor " + valor)
})


