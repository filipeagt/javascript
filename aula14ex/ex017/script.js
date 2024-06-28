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