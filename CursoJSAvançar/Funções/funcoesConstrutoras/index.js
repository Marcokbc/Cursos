//Função construtora -> Retorna Objetos (constroi)
//Função fabrica -> Retorna Objetos (fabrica)

//Construtora -> Pessoa (new)

function Pessoa(nome,sobrenome){
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){};

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

}

const p1 = new Pessoa('Marco', 'Antonio');
