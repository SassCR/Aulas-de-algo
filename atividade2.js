let nota1, nota2, nota3, resultado
let prompt = require("prompt-sync")()

n1 = Number(prompt("DIGITE A NOTA: "))
n2 = Number(prompt("DIGITE A NOTA: "))
n3 = Number(prompt("DIGITE A NOTA: "))

resultado = (n1 + n2 + n3 ) / 3

console.log("MEDIA FINAL: ", resultado)