//Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostrecomo resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe nomenu de opções.
//Código Opção
//1 - incluir
//2 - alterar
//3 - excluir
//4 - pesquisar
//5 - sair

let cod
console.log("1 - incluir");
console.log("2 - alterar");
console.log("3 - excluir");
console.log("4 - pesquisar");
console.log("5 - sair");
console.log("informe o código referente à ação desejada:");
cod = 30;
console.log(`código inserido: ${cod}`);

switch(cod) {
    case 1:
        console.log("Você selecionou 1 - Incluir");
        break;
     case 2:
        console.log("Você selecionou 2 - alterar");
        break;
     case 3:
        console.log("Você selecionou 3 - excluir");
        break;
     case 4:
        console.log("Você selecionou 4 - pesquisar");
        break;
     case 5:
        console.log("Você selecionou 5 - sair");
        break;
    default:
        console.log("ERRO: Código informado não é válido");
        break;
}