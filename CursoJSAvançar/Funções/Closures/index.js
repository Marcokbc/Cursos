//closure é quando uma função "lembra" seu escopo léxico, mesmo quando a função é excutada fora do mesmo.
function retornaFuncao(){
    const nome = 'Marco';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao);