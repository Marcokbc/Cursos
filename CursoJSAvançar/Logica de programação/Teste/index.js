const pessoas = ['João','Maria','Marco'];

function random(min,max){
    const r = Math.random()*(max - min) + min;
    return Math.floor(r);
}

console.log(pessoas[random(0,pessoas.length)]);