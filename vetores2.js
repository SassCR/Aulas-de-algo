const prompt = require("prompt-sync")()

let nota = []
let quantosAlunos

quantosAlunos = Number(prompt("Digite o número de alunos: "))

for (let i = 0; i < quantosAlunos; i++){
    nota[i]= Number(prompt("Entre com a nota: "))
}

for(let i = 0;i < nota.length; i++){
    console.log(nota[i])
}