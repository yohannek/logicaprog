// ASSUNTO: Vetores

//Vetor com nomes de alunos.

let alunos = ["Ana", "Bruno", "Carlos", "Diana" , "Raimundo"]; // Ana conta como 0.

//Vetor notas de alunos.
let notas = [8.5 , 3 , 8 , 10 , 9];



console.log(alunos); // Exibe os dados do vetor todo.
console.log(alunos[3]); // Diana
console.log(alunos[0]); // Ana
console.log(alunos[2]); // Carlos

alunos[2] = "Antônio";
console.log(alunos); // Ele mostra o vetor todo, porém com o nome de Antônio no lugar de carlos.



// for para percorrer cada índice do vetor.
for (let cont = 0 ; cont < 4; cont++ ) {
    console.log( alunos[cont] );
}

// Outro exemplo para numerar os alunos. ( ${cont + o número para iniciar} )
for ( let cont = 0 ; cont < 4; cont++ ){
    console.log (`aluno(a) ${cont + 1} : ${alunos[cont]}`);
}



// Exibindo todas as notas.
console.log(notas);
console.log( notas [2] ); // notas 8 do Antônio.



// Outro exemplo para numerar as notas dos alunos. (cont + o número para iniciar)
for ( let cont = 0 ; cont < 4; cont++ ){
    console.log (`Nome: ${alunos[cont]} - Nota: ${notas[cont]}`)
}



console.log(alunos.length); // Length está me dando o tamanho do vetor: 4 



//Testando tudo novamente. for clássico
for ( let cont = 0 ; cont < alunos.length ; cont++ ){ // Se eu adicionar mais alunos, gera automaticamente a quantidade com length em vez de escrever o número.
    console.log( alunos[cont] );
}

for ( let cont = 0 ; cont < alunos.length; cont++ ){
    console.log (`aluno(a) ${cont + 1} : ${alunos[cont]}`);
}

for ( let cont = 0 ; cont < alunos.length; cont++ ){
    console.log (`Nome: ${alunos[cont]} - Nota: ${notas[cont]}`)
}




// Exemplo de for of

for ( let aluno of alunos ) {
    console.log (`Nome: ${aluno}`);
} 



// Exemplo de for Each
// Aluno recebe o dado do vetor, índice recebe o índice do vetor
// Estes parâmetros funcionam NESTA ORDEM. Não devem ser invertido:

alunos.forEach(function(aluno, indice){
    console.log(`índice: ${indice}, aluno: ${aluno}`);
});



// Métodos push, unshift, pop e shift.
// Push - adiciona ao final do vetor.

alunos.push("Jéssica");
console.log(alunos);

// Pop - remove do final do vetor.

alunos.pop();
console.log(alunos);

//  Unshift - adiciona ao início do vetor.

alunos.unshift("Jéssica");
console.log(alunos);

// Shift -  remove do início do vetor.

alunos.shift();
console.log(alunos);