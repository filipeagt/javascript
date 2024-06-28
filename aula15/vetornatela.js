let valores = [5,8,2,9,3]
valores.push(1,3)
valores.sort()
/*
console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`Oprimeiro valor do vetor é ${valores[0]}`)

for (let i=0;i<valores.length;i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}
*/
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}