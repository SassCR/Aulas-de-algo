const prompt=require("prompt-sync")()
let m = [[],[],[]]
let soma = 0
for(let l = 0; l<41; l++){
    m[l] = []
    for(let c = 0; c < 4; c++){
        m[l][c] = Number(prompt("M["+l+"]["+c+"]="))
        if(l ==c){
        soma = soma+ m[l][c]
        }
    }
}

for(let l=0; l < m.length; l++){
    console.log("A soma é: "+ soma )
}