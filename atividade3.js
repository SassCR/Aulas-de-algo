let distancia, consumo, preco, total
let prompt = require('prompt-sync')()
//Distância da viagem (km): 300
//Consumo médio (km/l): 12
//Preço do combustível (R$): 5.50
//---
//Saída no Console:
//O custo total da viagem será de R$ 137.50

distancia= Number(prompt("Distancia da viagem "))
consumo= Number(prompt("Consumo médio: "))
preco= Number(prompt("Preço do combustivel: "))

total = (distancia / consumo ) * preco
console.log(total);
