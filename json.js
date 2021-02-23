//JSon

let pessoa = {
    nome: "Vinicius",
    idade: 21,
    altura: 1.80
}

let json = JSON.stringify(pessoa);

console.log(json);

let objetoDeNovo = JSON.parse(json);

console.log(objetoDeNovo);


let listaCompras = ["pão", "presuto", "queijo"]
let json1 = JSON.stringify(listaCompras);
console.log(json1);

let arrayDeNovo = JSON.parse(json1);
console.log(arrayDeNovo);