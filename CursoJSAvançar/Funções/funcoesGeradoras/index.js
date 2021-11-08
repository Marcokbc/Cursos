function* geradora1(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

for(let valor of g1){
    console.log(valor);
}

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

//return faz a função parar ai, já o yield não
//Nos yields não precisa ser apenas numeros ou string