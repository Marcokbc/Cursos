const aqui = document.querySelector('.container h1');
const data = new Date();    
aqui.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short' });

//Tem como fazer com switch, oq já foi feito em aulas passadas
//Tem como fazer com array tbm, VOU TENTAR DPS
//console.log(dia);
