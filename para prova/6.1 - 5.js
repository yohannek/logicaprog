//Desenvolver um programa que pergunte um número de 1 a 12, e responda o mês correspondente ao número,
//ou se o número não corresponde a nenhum dos 12 meses.

let cod
console.log (" 1 - Janeiro ");
console.log (" 2 - fevereiro ");
console.log (" 3 - março ");
console.log (" 4 - abril ");
console.log (" 5 - maio ");
console.log (" 6 - junho ");
console.log (" 7 - julho ");
console.log (" 8 - agosto ");
console.log (" 9 - setembro ");
console.log (" 10 - outubro ");
console.log (" 11 -  novembro ");
console.log (" 12 - dezembro ");
console.log("me de um número de 1 à 12 referente ao mês");
cod = 6
console.log(`o número escolhido foi: ${cod}`);

switch (cod){
    case 1:
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("março");
        break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("maio");
        break;
    case 6:
        console.log("junho");
        break;
    case 7:
        console.log("julho");
        break;
    case 8:
        console.log("agosto");
        break;
    case 9:
        console.log("setembro");
        break;
    case 10:
        console.log("outubro");
        break;
    case 11:
        console.log("novembro");
        break;
    case 12:
        console.log("dezembro");
        break;
   default:
    console.log("ERROR: nenhuma opção escolhida");
}
