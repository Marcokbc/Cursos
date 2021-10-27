let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b,c,a];
[a,b,c] = letras;

console.log(a,b,c);

const numeros = [1000, 2000, 3000, 4000, 5000];
const [um, , tres, ...resto] = numeros;
console.log(um, tres);
console.log(resto);
// ... = rest quando pegar o resto
//... = spread quando espalhar 

const sla = [[1,2,3], [4,5,6]];
console.log(sla[0][2]);
const [,[,,seis]] = sla;
console.log(seis);
