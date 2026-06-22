//Desenvolver um programa que pergunte um número e exiba a informação de que ele é positivo, negativo ou
//nulo.


let num

console.log("Me diga um número:");
num = -14;
console.log(`O número escolhido foi: ${num}`);

if (num > 0) {
    console.log(`${num} é positivo`)
}else if(num < 0) {
    console.log(`${num} é negativo`)
}else {
    console.log(`${num} resultado nulo`)
}
