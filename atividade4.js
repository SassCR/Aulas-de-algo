let prompt = require("prompt-sync")()
let custo, final
custo = Number(prompt("custo do carro: "))
final = custo +(28/100 * custo) + (45/100 * custo)

console.log(final)

//(Complexidade: Média) - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor (28%) e dos impostos (45%). Escreva um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
//Digite o custo de fábrica do carro: 40000
//---
//
//O custo final do carro é: R$ 69200
