//desestruturação (permite extrair dados de arrays e objetos literais de uma maneira simples)

let pessoa = {
    nome: "vinicius",
    altura: 1.80
};

const {nome, altura} = pessoa;

console.log(nome);


let listaCompras =["pão", "leite", "acuçar"];

const [item1, item2, item3] = listaCompras;

console.log(item1);
