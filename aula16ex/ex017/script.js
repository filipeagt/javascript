var vetor = []
var res = document.getElementById('res')

function adicionar() {
    let num = Number(document.getElementById('num').value)
    let lista = document.getElementById('lista')
    let item = document.createElement('option')
    
    if(num.length == 0 || num > 100 || num < 1 || vetor.indexOf(num) != -1) {
        alert('Valor inválido ou já encontrado na lista')
    } else { 
        res.innerHTML=""
        vetor.push(num)
        item.innerHTML = `Valor ${num} adicionado`
        lista.appendChild(item)
    }
    
}

function analisar() {  
    if (vetor.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {  
        vetor.sort()
        let soma = 0
        let media = 0

        for(i=0;i<vetor.length;i++) {
            soma += vetor[i]
        }

        media = soma / vetor.length

        addParagrafo(`Ao todo, temos ${vetor.length} números cadastrados.`)
        addParagrafo(`O maior valor informado foi ${vetor[vetor.length-1]}.`)
        addParagrafo(`O menor valor informado foi ${vetor[0]}.`)
        addParagrafo(`Somando todos os valores, temos ${soma}.`)
        addParagrafo(`A média dos valores digitados é ${media}.`)
    }
}

function addParagrafo(str) {
    
    let p = document.createElement('p')
    p.innerHTML = str
    res.appendChild(p)
}