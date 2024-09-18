function calcular() {
    if (validarSexo() && validarNasc() && validarFabric() && validarValor() && validarBonus()) {
        let apolice = 0
        let fabricacao = parseInt(fabric.value)
        let valor = parseFloat(val.value)
        let sexo = f.checked ? 'F' : 'M'
        let anoAtual = new Date().getFullYear()
        let nascimento = parseInt(nasc.value)
        let idade = anoAtual - nascimento
        let porcBonus = parseInt(bonus.value)/100

        if (fabricacao >= 2010) apolice = valor * (1.25/100)
        else if (fabricacao >= 2000) apolice = valor * (1.75/100)
        else if (fabricacao >= 1980) apolice = valor * (2/100)
        else apolice = valor * (2.5/100)

        if (sexo == 'F') apolice *= .90 // Desconto de 10%
        else apolice *= 1.05 // Acrescimo de 5%

        if (idade < 30 || idade > 60) apolice *= 1.2 // Acrescenta 20%

        apolice *= (1-porcBonus) // Desconta valor informado

        res.innerHTML = `Valor da apólice: R$ ${apolice.toFixed(2).replace('.', ',')}`
    } else {
        res.innerHTML = "Corrija os dados e tente novamente"
    }
}

function validarSexo() {
    if (f.checked == true || m.checked == true) {
        sex.style.background = "transparent"
        return true
    } else {
        sex.style.background = '#136d56'
        return false
    }
}

function validarNasc() {
    let certo = false
    if (nasc.value == '') {
        certo = false
    } else {
        let nascimento = parseInt(nasc.value)
        if (nascimento < 1901 || nascimento > 2001) {
            certo = false
        } else {
            certo = true
        }
    }
    if (certo) nasc.style.background = "transparent"
    else nasc.style.background = "#136d56"
    return certo
}

function validarFabric() {
    let certo = false
    if (fabric.value == '') {
        certo = false
    } else {
        let fabricacao = parseInt(fabric.value)
        if (fabricacao < 0) {
            certo = false
        } else {
            certo = true
        }
    }
    if (certo) fabric.style.background = "transparent"
    else fabric.style.background = "#136d56"
    return certo
}

function validarValor() {
    let certo = false
    if (val.value == '') {
        certo = false
    } else {
        let valor = parseFloat(val.value)
        if (valor < 0) {
            certo = false
        } else {
            certo = true
        }
    }
    if (certo) val.style.background = "transparent"
    else val.style.background = "#136d56"
    return certo
}

function validarBonus() {
    let certo = false
    if (bonus.value == "") {
        certo = false
    } else {
        let porcBonus = parseInt(bonus.value)
        if (porcBonus < 0 || porcBonus > 25) {
            certo = false
        } else {
            certo = true
        }
    }
    if (certo) bonus.style.background = "transparent"
    else bonus.style.background = "#136d56"
    return certo
}