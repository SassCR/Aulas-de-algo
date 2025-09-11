let prompt = require("prompt-sync")()
let vendidos, vendas, salario, comissao, final

vendidos = Number(prompt("Vendidos: "))
vendas= Number(prompt("vendas: "))
salario= Number(prompt("salario: "))
comissao= Number(prompt("comissao: "))

final = salario + (comissao * vendidos) + (5/100 * vendas)

console.log("O salario final do programa é: ",final)

//(Complexidade: Média-Alta) - Uma revendedora de carros paga a seus vendedores um salário fixo, uma comissão fixa para cada carro vendido e 5% do valor das vendas. Escreva um algoritmo que leia o número de carros vendidos, o valor total das vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
//Exemplo de Interação:
//Nº de carros vendidos: 4
//Valor total das vendas: R$ 80000
//Salário fixo: R$ 2500
//Comissão por carro: R$ 200
//---
//Saída no Console:
//O salário final do vendedor é: R$ 7300