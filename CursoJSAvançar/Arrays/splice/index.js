const nomes = ['Marco', 'Mariana', 'Julia',' João'];

//nomes.splice(indice, delete, elm1, elm2);

//pop
const removidos = nomes.splice(-2, Number.MAX_VALUE);
console.log(nomes, removidos);

//Add
const adiciona = nomes.splice(3,0,'Julio');
console.log(nomes,adiciona);

//push
nomes.splice(nomes.length, 0, 'Carlos');

//unshift
nomes.splice(0, 0, 'Carlos');
