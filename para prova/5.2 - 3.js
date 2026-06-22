//Desenvolver um programa que apresente o total da soma dos cinco primeiros números inteiros.

let cont = 1
let acum = 0

do { 
    acum =  acum + cont
    cont = cont + 1
    

} while (cont <= 5);
console.log(`a soma dos cinco primeiros números inteiros é: ${acum}`);