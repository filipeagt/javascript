function contar() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        //window.alert('[ERRO!] Faltam dados!')
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <br>"
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        let foot = '&#x1F9B6' // HTML emoji
        let flag = ` \u{1F3C1}` // JavaScript emoji

        if (passo <= 0) {
            window.alert('Passo inválido! Considerado passo 1.')
            passo = 1
        }

        if (inicio < fim) { // Contagem crescente
            for (let i=inicio;i<=fim;i+=passo) {
                res.innerHTML +=  ` ${i} ${foot}`
            }
            
        } else { // Contagem regressiva
            for (let i=inicio;i>=fim;i-=passo) {
                res.innerHTML += ` ${i} ${foot}`
            }
        }
        res.innerHTML += flag
    }
}