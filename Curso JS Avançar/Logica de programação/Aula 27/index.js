//const tresHoras = 60 * 60 *3 * 1000;//Por ser em milisegundos
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia);//O 0 começa em 01/01/1970 Timestamp unix se quiser algo antes coloque negatvo.
//Mas tem que ver o timezone GMT

//const data = new Date(2004, 1, 7, 10);//a, m, d, h, Min, s, milis
const data = new Date('2004-02-07 10:00:00:00');
console.log('Dia',data.getDate());
console.log('Mês',data.getMonth() + 1);// Mês começa do zero
console.log('Ano',data.getFullYear());
console.log('Hora',data.getHours());
console.log('Min',data.getMinutes());
console.log('Seg',data.getSeconds());
console.log('ms',data.getMilliseconds());
console.log('Dia semana',data.getDay());//0 - Domingo, 6 - Sábado

console.log(Date.now()); //Milesimos  de segundos desde o tempo 0

console.log(data.toString());
