let a = []
a[0] = 1
a[1] = 0
a[2] = 5
a[3] = -2
a[4] = -5
a[5] = 7

let soma = a[0] + a[1] + a[5]
console.log("Resutado: ", soma)

a[4]= 100
for(let i = 0; i < a.length; i ++){
    console.log(a[i])
}