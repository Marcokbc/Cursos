let umaString = "uma \"coisa\"";
let umaString2 = "uma \\coisa";

//Tem indicie =   012345678 
let umaString3 = "uma coisa";
console.log(umaString3[1]);//Pega somente o referente ao indicie
console.log(umaString3.charAt(6));//Mesma coisa de cima
console.log(umaString3.concat(' em um lindo dia'));
console.log(umaString3 + 'outra coisa');
console.log(`${umaString3} em um lindo dia`);
console.log(umaString3.indexOf('texto'));
console.log(umaString3.lastIndexOf('texto'));
console.log(umaString3.match(/[a-z]/g));//retorna todas(Por causa da tag g) letras minusculas
console.log(umaString3.search(/[a-z]/));//procura algo, nesse caso a primeira letra minuscula
console.log(umaString3.replace('Um', 'Outro'));//Substitui uma palvra por outra, pode ser // tbm
console.log(umaString3.replace(/a/g,'#'));//Substitui todas
console.log(umaString3.length)
console.log(umaString3.slice(0, 3));
console.log(umaString3.slice(-3));//tamanho menos esse valor para começar, pode atribuir o final tbm
console.log(umaString3.split(' '));//divide a partir de algo que vc mesmo estipula e coloca em uma array, se colocar uma virgula pode estipular quantas vezes faz isso
console.log(umaString3.toUpperCase);
console.log(umaString3.toLowerCase);