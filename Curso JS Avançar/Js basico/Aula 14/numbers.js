let num1 = 1000.777;
let num2 = 2.5;

console.log(num1.toString() + num2);//concatenando
console.log(num1.toString(2));// transformando um numero em binario 
console.log(num1.toFixed(2));//delimitando um limite para as casas decimais
console.log(Number.isInteger(num1));//Verifica se o numero é inteiro        

let temp = num1 * 'ola';
console.log(Number.isNaN(temp));//Verifica se é um Not a Number

let num3 = 0.7;
let num4 = 0.1;

num3 += num4; //num1 = num1 + num2// 0.8
num3 += num4;// 0.9
num3 += num4;// 1.0

//num3 = ((num3 * 100) + (num4 * 100)) / 100; //pode ser assim tbm
num1 = parseFloat(num3.toFixed(2));//Ou pode ser Number tbm

console.log(num3);
console.log(Number.isInteger(num1));

//let mult = num3 * num4;
//console.log(mult);