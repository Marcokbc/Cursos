function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){//Executa sempre em um determinado periodo de tempo
    console.log(mostraHora());
}, 1000);

setTimeout(function(){//executa uma vez em um tempo limite
    clearInterval(timer);
}, 5000);