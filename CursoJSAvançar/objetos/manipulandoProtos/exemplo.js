function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype); 

p1.desconto(100);
p2.desconto(20);

console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 60
    },
});

p3.desconto(50);
console.log(p3);