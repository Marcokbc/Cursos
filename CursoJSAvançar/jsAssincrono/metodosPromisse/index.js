//promisses = promessas

function rand(min, maz){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{//Se ta certo resolve e se esta errado reject 
        if(typeof msg !== 'string') reject(false);//O reject vai para o catch

        setTimeout(() => {
            resolve(msg);//Vai para o then
        }, tempo);
    });
}

//Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 1000),
    esperaAi('Promise 2', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro);
    });