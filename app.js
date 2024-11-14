alert("Boas vindas ao jogo do números secreto");     //passa uma mensagem  //alert para mostrar uma mensagem ao usuário sem esperar uma resposta
let numeroSecreto = 29;                               //deixa um espaço na memória pra armazenar uma variável
let chute = prompt("Escolha um número entre 1 e 30");              //dá uma mensagem aoa abir a aba do navegador  //uso prompt quando quero solicitar uma entrada de dados

if(chute == numeroSecreto){
    console.log("Isso aí ! Você descobriu o número secreto (29)");
}   