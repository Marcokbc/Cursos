const numeros = [5,7,8,9,12,60,88];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);
console.log(numerosPares);