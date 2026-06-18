//Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
//com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”;

let sexo
console.log("1 - feminino");
console.log("2 - masculino");
console.log("Informe o seu sexo, a seguir:");
sexo = 5;
console.log(`sexo inserido: ${sexo}`);

switch(sexo) {
    case 1:
        console.log("banheiro feminino à esquerda");
        break;
    case 2:
        console.log("banheiro masculino à direita");
        break;
    default:
        console.log("ERRO: Sexo informado não é válido");
        break;
}
