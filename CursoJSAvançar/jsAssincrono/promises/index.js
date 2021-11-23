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

esperaAi('Conexao com o BD', rand(1, 3))
    .then(resposta =>{
        console.log(resposta);
        return esperaAi('Buscando dados na BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1, 3));
    })
    .catch(e => {
        console.log('ERRO:',e);
    });

console.log('Isso aqui sera exibido antes da promise');//Isso ocorre pq o interpretador não vai esperar, 
//ele vai executar o codigo de fora primeiro