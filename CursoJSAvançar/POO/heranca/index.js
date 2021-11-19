class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já ligado`);
            return;
        }
        this.ligado = true;
    }
}

class Smartphone extends DispositivoEletronico{//herança
    constructor(nome, cor){
        super(nome);//para utilizar o da classe pai
        this.cor = cor;
    }
}//Ele primeiro busca no seu prototype ou escopo para buscar nos respesctivos da classe pai