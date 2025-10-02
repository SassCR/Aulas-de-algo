let prompt=require("prompt-sync")()
let numero = Number(prompt("Digite o número: "))

for(let i=0; i<=10; i++){
let tabuada= i*numero
    console.log("O resultado dessa caceta é= ",numero, " * ", i, " = ", tabuada)
}
