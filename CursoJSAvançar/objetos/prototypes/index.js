/**
 * Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.
 
    Definição de protótipo
    Protótipo é o termo  usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde
    para futuras produções.

    Todos os objetos tem uma refêrencia interna para protótipo (__proto__) que vem da propriedade prototype da função
    construtora que foi usada para cria-lo. Quando tentamos acessar um membro de objeto, primeiro o motor de JS vai tentar 
    encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não)
    tal menbro. 
 */

//Construtora -> molde (como se fosse uma classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// Pessoa.prototype === pessoa.__proto__
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
};
//pessoa1 --> Pessoa.prototype --> Object.prototype

//Instância
const pessoa1 = new Pessoa('Marco', 'Antônio');

console.dir(pessoa1.nomeCompleto());