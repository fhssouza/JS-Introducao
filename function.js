//modo declarativo
let numero = 32 //escopo global

function somar(a,b){
    //codigo
    console.log(numero)
    return a + b
}

let resultadoSomar = somar(1,2);
console.log(resultadoSomar);



//modo expressão
const multiplicar = function(a, b){
    //código
    let numero = 35 //escopo local
    console.log("Estou multiplicando..")
    return a * b

}

let resultadoMultiplicar = multiplicar(2,10);
console.log(resultadoMultiplicar);