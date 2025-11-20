const prompt=require("prompt-sync")()
let m = [[],[],[]]

for(let l = 0; l < 21; l++){
    m[l] = []
    for(let c = 0; c < 3; c++){
        m[l][c] =prompt("M["+l+"]["+c+"]=")
    }
}
for(let l=0; l < m.length; l++){
console.log(m[l])    
}
