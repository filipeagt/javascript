function verificar() {
    var data =  new Date()
    var ano =  data.getFullYear()
    var nascimento = window.document.getElementById('txtano').value
    var res =  window.document.getElementById('res')

    if (nascimento.length == 0 || Number(nascimento) > ano) {
        res.innerHTML = `<p>[ERRO] Verifique os dados e tente novamente!</p>`
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'imagens/moco.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'imagens/moca.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}