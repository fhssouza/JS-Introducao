let dia = "terça";

//IF Ternário

let resultado = dia == "domingo"? "Vou a Praia!":"Fico em casa!";

console.log(resultado);

//Switch

switch(dia){
    case "segunda":
        console.log("Vou tomar café");
        break;
    case "quarta":
        console.log("Vou no cinema");
        break;
    default:
        console.log("Eu não vou fazer nada!");
}