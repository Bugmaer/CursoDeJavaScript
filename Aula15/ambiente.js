var num = [5, 8, 4]
num[3]=6
num.push(7)
num.sort()

/*var c = 0
while (c <= num.length) {
    console.log(`Nosso vetor ${c} é o ${num[c]}`)
c++
}*/
for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
