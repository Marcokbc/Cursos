const nome = 'Marco Antônio';
const sobrenome = 'Meira';
let idade = '17';
let peso = '63';
let alturaEmM = '1.75';
let imc;
let nascimento;

nascimento = 2021 - idade;
imc = peso/(alturaEmM * alturaEmM);
console.log(nome + sobrenome + ` tem , ${idade}, anos, pesa , ${peso},` +  'Kg. Tem ', alturaEmM, ' de altura, e tem seu imc de ',imc,'. Nascido em', nascimento , '.');

//Pode concatenar tanto com , e com +
//Pode fazer com crase como foi visto acima
