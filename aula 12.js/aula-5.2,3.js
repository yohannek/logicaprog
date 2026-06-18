//Desenvolver um programa que apresente o total da soma dos cinco primeiros números inteiros.

let cont = 1;
let acum = 0;

do {
    acum += cont;
    cont += 1; //cont = cont + 2
} while ( cont <= 5 );

console.log(`A soma dos valores pares de 0 à 5 é: ${acum}`)