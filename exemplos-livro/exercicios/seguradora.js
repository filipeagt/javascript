function calcular() {
    if (validarSexo() && validarNasc() && validarFabric() && validarValor() && validarBonus()) {
        res.innerHTML = "OK!"
    } else {
        res.innerHTML = "Corrija os dados e tente novamente"
    }
}

function validarSexo() {
    if (f.checked == true || m.checked == true) {
        sex.style.background = "white"
        return true
    } else {
        sex.style.background = "yellow"
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
    if (certo) nasc.style.background = "white"
    else nasc.style.background = "yellow"
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
    if (certo) fabric.style.background = "white"
    else fabric.style.background = "yellow"
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
    if (certo) val.style.background = "white"
    else val.style.background = "yellow"
    return certo
}

function validarBonus() {
    let certo = false
    if (bonus.value == "") {
        certo = false
    } else {
        let porcBonus = parseInt(bonus.value)
        if (porcBonus <= 0 || porcBonus > 25) {
            certo = false
        } else {
            certo = true
        }
    }
    if (certo) bonus.style.background = "white"
    else bonus.style.background = "yellow"
    return certo
}