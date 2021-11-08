const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace'];

nomes[2] = 'João';
delete nomes[2];
const nomes2 = new Array('Marco', 'Maria');

const novo = [...nomes];
novo.pop();

const removido = nomes.shift();
const parte = nomes.slice(1,-1);

const nome = 'Marco Antônio';
const nomeSeparado = nome.split(' ');
console.log(nomeSeparado);

const nomeArray = ['Marco', 'Antônio'];
const nomeString = nomeArray.join(' ');

