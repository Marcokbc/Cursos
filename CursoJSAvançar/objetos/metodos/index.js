// const produto = {produto: 'Caneca', preco: 1.9};
// const p2 = produto;
// //Ambas as variaveis apontam para o mesmo lugar na memoria

const produto = {produto: 'Caneca', preco: 1.9};
const p2 = {...produto, material: 'porcelana'};
//Aqui vc copia o valor de uma variavel e cola em outra

const outroObjeto = Object.assign({}, produto);
//Aqui vc pega o produto e manda para um objeto vazio que esta associado a outroObjeto
//const outroObjeto = {nome: produto.nome};caso queira pegar valores em especifico

console.log(Object.getOwnPropertyDescriptor(produto, 'produto'));//ve as caracteristicas/prodpriedades
console.log(Object.values(produto));//Pode ser entries tbm, mas retorna em array

for(let entry of Object.entries(produto)){//iteração
    console.log(entry);
}


for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}//Pode ser assim tbm
