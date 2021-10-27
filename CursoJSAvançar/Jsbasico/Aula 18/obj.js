function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa1 = criaPessoa('Marco','Meira',25); 
console.log(pessoa1);

const pessoal = {
    nome:'Luiz',
    sobrenome:'Miranda',
    idade:25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    },
};

pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();