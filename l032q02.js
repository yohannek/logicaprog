//Elaborar um programa que pergunte o nome do usuario, quatro valores inteiros e apresente 2 resultados:
//a) Resultado de suas adições
//b) Resultado de suas multiplicações
//Exibir ao inicio uma saudaçao ao usuario

//declaraçao de variaveis
let nome, soma, mult;
let num1, num2, num3, num4;

console.log("Informe o seu nome: ")
//leia(nome)
nome = "Yohanne";

console.log("Informe o primeiro valor inteiro")
num1 = 5;

console.log("Informe o segundo valor inteiro")
num2 = 8;

console.log("Informe o terceiro valor inteiro")
num3 = 10;

console.log("Informe o quarto valor inteiro")
num4 = 12;

soma = num1 + num2 + num3 + num4
console.log("a soma dos 4 valores inseridos é", soma);

mult = num1 * num2 * num3 * num4;
console.log("a multiplicaçao dos 4 valores inseridos é", mult);


//comentario inserido em 17/06/26