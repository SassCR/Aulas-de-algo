/*Exercício 8: Calcular Quadrados
(Complexidade: Média) - Ler um conjunto de 10 números reais, armazenando-o em um vetor. Em seguida, calcular o quadrado de cada um desses números e armazenar o resultado em um segundo vetor. Ao final, imprimir os dois vetores.

Exemplo de Interação:

Digite 10 números:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
---
Saída no Console:
Vetor Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Vetor dos Quadrados: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]*/
const prompt=require("prompt-sync")()

let vOriginal = []//vetor original
let vQuadrado = []
for (let i = 0; i < 10; i++){

n = Number(prompt(`Digite seu número ${i+1}: `))
vOriginal[i]= n
}for(let i = 0;i <10; i++){
    vQuadrado[i] = vOriginal[i] * vOriginal[i] 
}
console.log("Vetor original: ", vOriginal)
console.log("Vetor quadrado: ", vQuadrado)




