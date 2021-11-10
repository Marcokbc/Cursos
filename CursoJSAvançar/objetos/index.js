const pessoa = {
    nome: 'Marco',
    sobrenome: 'Meira',
    idade: 17,
    getDataNascimento(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade
    },
};

console.log(pessoa.nome);
console.log(pessoa['sobrenome']);//Mais recomendavel para substituir com variaveis
console.log(pessoa.getDataNascimento());

delete pessoa.nome;
console.log(pessoa);

for(let chave in pessoa){
    console.log(pessoa[chave]);
}


const carro = new Object();
carro.modelo = 'Celta';
carro.falarCor = () => console.log("azul");

carro.falarCor();



//Factory functions / constructor functions / Classes

//Factory
function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

//Constructor
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//A palavra new cria um objeto vazio e com a palavra this e atrelar a palavra this ao objeto
const p1 = new Pessoa('Marco', 'Meira');

//constante -> ENDERECODEMEMORIA -> VALOR
//Pode fazer isso - constante.ENDERECODEMEMORIA = {nome: 'Outra coisa}
//X - Não pode fazer isso - constante = NOVOENDERECO

Object.freeze(pessoa);//Travou o objeto de pessoa. Pode travar o this dentro do objeto tbm
