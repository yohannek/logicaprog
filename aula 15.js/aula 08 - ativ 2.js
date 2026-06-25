function calcularArea(base, altura) {
    let area;
    return area = base * altura;
}

let a = calcularArea(2, 3)
console.log(`A área do retangulo é ${a}`);
let n1 = 5, n2 = 8;
let n3 = calcularArea(n1, n2);
console.log(`A área do retangulo é ${n3}`);

function converterCelsius(temp){
    return (temp * 9/5) + 32;
}
console.log (`40 celsius = ${converterCelsius(40)} Fahrnheit`);

function saudacaoPersonalizada(nome){ // nome é uma variável local
    return `Olá, ${nome}! Seja bem-vindo.`;
}
console.log(saudacaoPersonalizada("Yohanne"));

let nome = "Joana"; // variável global
console.log(saudacaoPersonalizada(nome));


