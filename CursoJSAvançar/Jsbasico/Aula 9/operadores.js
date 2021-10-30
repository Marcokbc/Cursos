/*
Operadores aritimeticos
+ = Adição/cocatenação
- = Subtração
* = multiplicação
/ = Divisão
** = potencia
% = resto da divisão
++ valor mais 1. Se for antes ele soma primeiro e mostra depois, se for apos mostra primeiro e soma depois
-- = valor menos 1
*/
const num1 = 5;
const num2 = 10;
const num3 = '3';
console.log(num1 + num2);
console.log(num2 + num3);

console.log(num1 * num2);

console.log(num1 - num2);

console.log(num1/num2);

console.log(num1 ** num2);

console.log(num1 % num2);

let contador = 1;
contador++;
console.log(contador);
console.log(contador += 2); // contador = contador + 2. Pode ser *= -= **=...

let numero1 = Number('1');//converte
let numero2 = parseInt('2'); //converte
console.log(typeof numero2);