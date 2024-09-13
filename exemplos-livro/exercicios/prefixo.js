function converter() {
    let valor = parseFloat(val.value)
    let prefixo = pre.value

    switch (prefixo) {
        case 'k':
            resultado.innerHTML = `<p>${(valor/1000).toLocaleString()} M</p>`
            resultado.innerHTML += `<p>${(valor/1000000).toLocaleString()} G</p>`
            resultado.innerHTML += `<p>${(valor/1000000000).toLocaleString()} T</p>`
            break
        case 'M':
            resultado.innerHTML = `<p>${(valor*1000).toLocaleString()} k</p>`
            resultado.innerHTML += `<p>${(valor/1000).toLocaleString()} G</p>`
            resultado.innerHTML += `<p>${(valor/1000000).toLocaleString()} T</p>`
            break
        case 'G':
            resultado.innerHTML = `<p>${(valor*1000000).toLocaleString()} k</p>`
            resultado.innerHTML += `<p>${(valor*1000).toLocaleString()} M</p>`
            resultado.innerHTML += `<p>${(valor/1000).toLocaleString()} T</p>`
            break
        case 'T':
            resultado.innerHTML = `<p>${(valor*1000000000).toLocaleString()} k</p>`
            resultado.innerHTML += `<p>${(valor*1000000).toLocaleString()} M</p>`
            resultado.innerHTML += `<p>${(valor*1000).toLocaleString()} G</p>`
    }
}