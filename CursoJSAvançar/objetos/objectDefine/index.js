//defineProperty - defineProperties
function Produto(nome, preco, estoque){

    Object.defineProperty(this,'estoque',{
        enumerable: true,//Mostra a chave
        value: estoque,//Valor
        writable: false, //Se pode alterar o valor em algum momento
        configurable: true  //Se pode apagar a chave, ou reconfigurar
    });

    //exemplo de reconfiguração 
    // Object.defineProperty(this,'estoque',{
    //     enumerable: true,//Mostra a chave
    //     value: estoque,//Valor
    //     writable: false, //Se pode alterar o valor em algum momento
    //     configurable: true  //Se pode apagar a chave, ou reconfigurar
    // });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,//Mostra a chave
            value: nome,//Valor
            writable: false, //Se pode alterar o valor em algum momento
            configurable: true  //Se pode apagar a chave, ou reconfigurar
        },
        preco: {
            enumerable: true,//Mostra a chave
            value: preco,//Valor
            writable: false, //Se pode alterar o valor em algum momento
            configurable: true  //Se pode apagar a chave, ou reconfigurar
        }
    });
}

const p1 = new Produto('Camiseta',20,3);
console.log(Object.keys(p1));