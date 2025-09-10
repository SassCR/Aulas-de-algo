let salario, reajuste, final
let prompt = require('prompt-sync')()

salario = Number(prompt('DIGITE SEU SALARIO: '))

reajuste = Number(prompt('VALOR DO REAJUSTE: '))

final = salario + (salario * reajuste / 100)

console.log("A ESMOLA NOVA É: ",final)
