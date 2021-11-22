class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //Metodo de instancia. Metodo apenas para instancias da classe
    aumentarVolume(){
        this.volume += 2;
    }

    //Metodo estatico. apenas para a classe, tanto é que o this aponta para a classe
    static trocaPilha(){
        console.log("Vou trocar" + this);
    }

}