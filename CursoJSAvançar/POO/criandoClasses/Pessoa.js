class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Aqui não precisa conectar ao prototype
    falar(){
        console.log(`${this.nome} está falando.`);
    }
}

//Instanciando
const p1 = new Pessoa('Marco','Meira');
console.log(p1);
