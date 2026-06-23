let numero = [1, 2, 3, 4, 5];
console.log(numero);

for (let cont = 0 ; cont < 5 ; cont ++){
    console.log( numero[cont]);
}

for ( let numeros of numero ) {
    console.log(`Números: ${numero}`);
}

numero.forEach(function(numero, indice){
    console.log(`Índice: ${indice} - Números: ${numero}`);
})