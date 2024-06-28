let num = [5,8,2,9,3]
num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let busca = 4
let pos = num.indexOf(busca)

if (pos == -1) {
    console.log(`O valor ${busca} não foi encontrado!`)
} else {
    console.log(`O valor ${busca} está na posição ${pos}`)
}