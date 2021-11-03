//arguments sustenta todos os argumentos enviados
function funcao(){
    let total = 0;
    for(let argumentos of arguments){
        total += argumentos;
    }

    console.log(total);
}

funcao(1, 2, 3, 4);


//Se vc n seta o parametro que a função pede ele seta como undefined

function soma(a = 0,b = 0){//se n for informado ele pega esses valores
    // b = b || 0; Maneira antiga
    console.log(a + b);
}

soma(10,undefined);//Dessa forma ele pega o valor padrão setado acima, ou não informandp

function pessoa({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
}

pessoa({nome: 'Marco',sobrenome:'Meira',idade:17});

const conta = function(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};

conta('+',1,2,10);