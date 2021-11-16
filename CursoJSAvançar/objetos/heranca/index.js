function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);//lincando. tem que passar o this da função, no caso o objeto que eu criar utilizando a função construtora
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);//se deixar apenas assim ele assume que o constructor de camiseta é o mesmo de produto
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100)); //Ele primeiro verifica a função que o chamou, dps o proto da propria função, dps a da herança
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const p1 = new Produto('Gen', 111);
const ca1 = new Camiseta('Regata', 20, 'Preta');
const caneca = new Caneca('Canenca', 13, 'Plastico', 5);
caneca.estoque = 100;

console.log(caneca.estoque);
console.log(caneca);
console.log(ca1);
console.log(p1);


