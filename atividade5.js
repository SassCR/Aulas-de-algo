let prompt = require("prompt-sync")()
let anos, meses, dias

anos = Number(prompt("anos: "))
meses = Number(prompt("meses: "))
dias = Number(prompt("dias: "))

idade = (365 * anos) + (meses * 30) + dias

console.log("idade em dias: ",idade);


//(Complexidade: Média) - Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias. (Considere um ano com 365 dias e um mês com 30 dias).
//Exemplo de Interação:
//Digite os anos: 25
//Digite os meses: 3
//Digite os dias: 15
//---
//Saída no Console:
//A idade total em dias é: 9230//