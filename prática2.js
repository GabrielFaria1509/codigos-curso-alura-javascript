// DESAFIO 1
let nomesemana = prompt("Qual dia da semana é hoje?");
if (nomesemana === "Sábado" || nomesemana === "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}
//gabarito
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

//DESAFIO 2
let valor("Digite um valor : ")
if(valor >= 0){
  alert("Positivo");
}
else
  alert("Negativo");
//gabarito
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

//DESAFIO 5
let nomeusuario = prompt("Digite seu nome : ");
alert("Seja bem vindo " + nomeusuario + "!");
//gabarito
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);

//DESAFIO 4 
let saldo = 10000;
alert(`seu está bom : R$${saldo}.`);
//gabarito
let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

//DESAFIO 3 
let pontuacao = prompt("Digite a pontuação obtida : ")
if(pontuacao >=100){
  alert("Parabéns, você venceu!");
  //gabarito
pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}
}
else{
  alert("Tente novamente para ganhar");
  
