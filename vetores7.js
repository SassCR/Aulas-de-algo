const prompt=require("prompt-sync")()
let v = []
let x = Number(prompt("Digite seu número: "))

for(i=0; i < 10; i++){
    v[i] = Number(prompt("Entre com o v["+i+"] ="))
}

for(i = 0; i < v.length; i++){
    if (v[i] == x){
        v[i] = 0
    }
}

console.log(v)