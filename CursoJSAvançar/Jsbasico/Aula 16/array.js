//String é indexado pelos carcteres por assim dizer, já array é pelos elementos
const alunos = ['Luiz','Maria','João',1,true,null];
console.log(alunos);
console.log(alunos[2]);//acessar somente um elemento do aray com seu index
alunos[0] = 'Eduardo';//modifica 
console.log(alunos[0]);
alunos[6] = 'Marco';//atribui a um novo
console.log(alunos[6]);
alunos.push('Otavio');// add ao final
alunos.unshift('James');//add no incio
const removido = alunos.pop();//remove o ultimo elemento
console.log(removido);
alunos.shift();//remove o primeiro elemento
console.log(alunos.slice(0,-1));//selecioba uma certa parte
console.log(typeof alunos);
console.log(alunos instanceof Array);//verifica se é um array
//delete alunos[1];//Remover
//alunos[alunos.length] = 'Fabio' ;//tem como add ao final assim tbm
//console.log(alunos);

