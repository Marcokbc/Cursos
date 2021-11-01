const frutas = ['Pera','Maça','Uva'];
const pessoas = {
    nome:'Marco',
    idade:'17',
    sobrenome:'Meira',
};
console.log(pessoas.nome);
console.log(pessoas['nome']);

for(let chave in pessoas){
    console.log(chave, pessoas[chave]);
}

for(let i in frutas){
    console.log(frutas[i]);
}