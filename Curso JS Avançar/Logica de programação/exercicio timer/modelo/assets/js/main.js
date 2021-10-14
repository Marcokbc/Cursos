function relogio(){
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
          hour12: false,
          timeZone: 'UTC'
        });
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;//Oq vc clicou

    if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciarRelogio();
    }
    if(el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
});
/* iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();
});

pausar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.classList.add('pausado');
    
});

zerar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
}); */
}
relogio();