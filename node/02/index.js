/* PALAVRAS CHAVE IMPORTANTES

** GLOBAIS **
process
console

** PSEUD-GLOBAIS **
module
__filename

** MÓDULOS / PACOTES **
Incorporados -> Built-in
Locais -> Local
Terceiros -> Third Party

*/
//console.log(process);
const calc = require('./modules/calculadora');

console.log(calc.somar(5, 4));
console.log(calc.subtrair(5, 4));
