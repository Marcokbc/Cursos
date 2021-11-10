//Some todos os numeros (reduce)
//retorne um array com os pares (filter é mais viaval mas farei com reduce)
//retorne um array com o dobro dos valores (map)
const numeros = [1,2,3,4,5,6,7,8,9,10];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    console.log(acumulador);
    return acumulador;
}, 0);//Valor inicial para o acumulador

const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);//Valor inicial para o acumulador

const dobro = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador.push(valor*2);
    return acumulador;
}, []);//Valor inicial para o acumulador

console.log(total, pares, dobro);

const pessoas = [
    {nome: 'Luiz', idade: 40},
    {nome: 'Julia', idade: 15},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);

