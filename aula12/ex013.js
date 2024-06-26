var agora = new Date()
var diaSemana = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

//diaSemana = 6
switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo'
        break
    case 1:
        diaSemana = 'Seguda-feira'
        break
    case 2:
        diaSemana = 'Terça-feira'
        break
    case 3:
        diaSemana = 'Quarta-feira'
        break
    case 4:
        diaSemana = 'Quinta-feira'
        break
    case 5:
        diaSemana = 'Sexta-feira'
        break
    case 6:
        diaSemana = 'Sábado'
        break
    default:
        diaSemana = '[ERRO!] Dia inválido'
}
console.log(`Hoje é ${diaSemana}`)