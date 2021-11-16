//new Object -> Object.prototype
//Chamar um objeto dessa forma o Javascript faz a chamada da função construtora de objetos
const objA = {
    chaveA: 'A',
    //__proto__: Object.protoype
};

const objB = {
    chaveB: 'B',
    //__proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); //Setando o prototype de B como objA
Object.setPrototypeOf(objC, objB);

//getPrototypeOf = pegar as informações setadas