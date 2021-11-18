const falar = {
        falar(){
            console.log('Pessoa esta falando');
        },
    };

const pessoaPrototype = Object.assign({},falar);
function criaPessoa(nome,sobrenome){
    // const pesssoaProto = {
    //     falar(){
    //         console.log('Pessoa esta falando');
    //     },
    // };
    return Object.create(pesssoaProto,{
        nome:{value:nome},
        sobrenome: {value:sobrenome},
    });
}

const p1 = criaPessoa('Luiz','Otavio');