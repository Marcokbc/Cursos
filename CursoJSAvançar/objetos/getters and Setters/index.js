//defineProperty - defineProperties
function Produto(nome, preco, estoque){
    this.preco = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this,'estoque',{
        enumerable: true,//Mostra a chave
        configurable: true,  //Se pode apagar a chave, ou reconfigurar
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('mensagem');
            }
            estoquePrivado = valor;
        }
    });

    //exemplo de reconfiguração 
    // Object.defineProperty(this,'estoque',{
    //     enumerable: true,//Mostra a chave
    //     value: estoque,//Valor
    //     writable: false, //Se pode alterar o valor em algum momento
    //     configurable: true  //Se pode apagar a chave, ou reconfigurar
    // });
}

function craProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    };
}

const p1 = new Produto('Camiseta',20,3);
console.log(Object.keys(p1));