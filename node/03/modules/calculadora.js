// function somar(a, b) {
//     return a + b;
// }

// function subtrair(a, b) {
//     return a - b;
// }

//module.exports = {somar, subtrair}

const calculadora = {
    somar: function (a,b) {
        return a+b;
    },
    subtrair: function (a,b) {
        return a-b;
    }
}

module.exports = calculadora;