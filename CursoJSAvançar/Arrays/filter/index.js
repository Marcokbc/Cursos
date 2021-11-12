//Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos 
const numeros = [5,6,7,8,9,10,11,12,13,14,15];

const numeros10 = numeros.filter((valor,indice,array) =>  valor > 10);
console.log(numeros10);

const pessoas = [
    {nome: 'Marco', idade: '17'},
    {nome: 'João', idade: '32'},
    {nome: 'Maria', idade:'50'},
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5); //Arrow function
console.log(pessoasNomeGrande);

const pessoasVelhas = pessoas.filter(obj => obj.idade >= 30);
console.log(pessoasVelhas);

const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(terminaComA);