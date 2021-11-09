//Dobrar os numeros

const numeros = [1,2,3,4,5,6];
const numerosDobro = numeros.map(valor => valor * 2);
console.log(numerosDobro);

const pessoas = [
    {nome: 'Marco', idade: 10},
    {nome: 'Maria', idade: 15},
    {nome: 'João', idade: 20},
    {nome: 'Pedro', idade: 50},
    {nome: 'Julia', idade: 80},
    {nome: 'Felipe', idade: 15},
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));//Poderia ser deletando o nome. delete obj.nome
const comIds = pessoas.map(function(obj,indice){
    obj.id = indice;
    return obj;
});//Tomar cuidado pois o map modifica o array. Poderia ser feito tambem com
/**
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
 */
console.log(comIds);