function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    var foot = '&#x1F9B6'
    var flag = '&#x1F3C1'

    res.innerHTML = ""

    for (i=inicio;i<=fim;i=i+passo) {
        res.innerHTML +=  i + foot
    }
    res.innerHTML += flag
}