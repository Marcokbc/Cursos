//return
//retorna um valor e termina a função

function soma(a,b){
    return a + b;
}

function criaPessoa(nome,sobrenome){
    return{nome,sobrenome};
}
const p1 = criaPessoa('Marco','Meira');

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Ola');
const total = olaMundo('mundo!');
console.log(total);

function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));


