/*
function tabuada() {
    var num = document.getElementById('num').value
    var txt = document.getElementById('txt')

    if (num == "") {
        alert('Digite um número...')
    } else {
        txt.innerHTML = ""
        for (var i=1;i<=10;i++) {
            txt.innerHTML += `${num} x ${i} = ${num*i}\n`
        }
    }
}
*/

function tabuada() {
    var num = document.getElementById('num').value
    var tabuada = document.getElementById('tabuada')

    if (num.length == 0) {
        alert('Digite um número...')
    } else {
        num = Number(num)
        tabuada.innerHTML = ""
        
        for (var i=1;i<=10;i++) {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
        }
    }
}