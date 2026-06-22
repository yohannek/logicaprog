//Fazer um programa que pergunte uma temperatura ao usuário, em graus Fahrenheit, e apresente esta
//temperatura convertida em graus Celsius. A fórmula da conversão é c = (f – 32) x 5 : 9 , onde c é a temperatura
//em graus Celsius e f em Fahrenheit.

let c, f

console.log("qual a temperatura atual em fahrenheit?");
f = 70;
console.log(`a temperatura atual é: ${f}`);

c=(f-32)*5/9
console.log(`a temperatura convertida em fahrenheit para celsiu é: ${c}`);