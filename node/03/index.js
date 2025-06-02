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
import {calculadora, multiplicar} from './modules/calculadora.js'; //usar .js nesse caso

console.log(calculadora.somar(5, 4));
console.log(calculadora.subtrair(5, 4));
console.log(multiplicar(5,4));
