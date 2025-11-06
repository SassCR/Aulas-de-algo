const prompt=require("prompt-sync")()
let v = []
let pMaior = 0
let pMenor = 0
let i

for(i=0; i < 10; i++){
    v[i] = Number(prompt("Entre com o v["+i+"] ="))
}

for(i=1; i<10; i++){
    if(v[i] > v[pMaior]){
        pMaior = i
    }
    if(v[i] < v[pMenor]){
        pMenor = i
    }
} 
console.log("O maior é: ",v[pMaior])
console.log("O menor é: ",v[pMenor])