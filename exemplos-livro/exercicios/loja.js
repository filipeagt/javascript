function calcular() {
    total.value = (parseFloat(preco.value) * parseFloat(quantidade.value) * (1 - parseFloat(desconto.value)/100)).toFixed(2).replace('.',',')
}