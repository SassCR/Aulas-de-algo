let prompt = require("prompt-sync")()
let total, gorjeta, pessoas, final, final_pessoa

total = Number(prompt("Total: "))
gorjeta = Number(prompt("Gorjeta: "))
pessoas= Number(prompt("Pessoas: "))

final = total + (gorjeta/100 * total) 
final_pessoa = final/pessoas

console.log("O valor total da gorjeta é: ",final, " Cada pessoa deve pagar: ",final_pessoa);

// (Complexidade: Média-Alta) - Crie um algoritmo que leia o valor total de uma conta de restaurante, o percentual de gorjeta a ser pago e o número de pessoas para dividir a conta. Calcule e imprima o valor total a ser pago e o valor que cada pessoa deve pagar.
// Exemplo de Interação:
// Valor total da conta: R$ 150
// Percentual da gorjeta (%): 10
// Número de pessoas: 4
// ---
// Saída no Console:
// O valor total com gorjeta é R$ 165.00. Cada pessoa deve pagar R$ 41.25.