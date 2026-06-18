//Desenvolver um programa que pergunte um número e informe como resposta se o número informado é par ou é ímpar.

let num 
console.log("1 - ímpar")
console.log("2 - Par")
console.log("Informe a seguir um número:");
num = 1;
console.log(`num inserido: ${num}`);

switch(num) {
    case 1:
        console.log("O número escolhido é impar");
        break;
    case 2:
        console.log("O número escolhido é par");
        break;
    default:
        console.log("ERROR: Nenhum número inserido");
        break;
}