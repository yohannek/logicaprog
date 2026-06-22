//Desenvolver um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500.
//Utilize um laço que varie de 2 em 2.

let cont = 0
let acum = 2

do {

    acum = acum + cont;
    cont = cont + 2;
    
    }
while ( cont <= 500);
console.log(`ò resultado da soma dos valores pares de 0 à 500 é: ${acum}`)

