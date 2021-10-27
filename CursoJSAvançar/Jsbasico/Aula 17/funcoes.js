function saudacao(nome){
    console.log( `Oi ${nome}!`);
    return 123456;
}

function soma(a,b){
    return a + b;
}
function soma2(num1 = 1,num2 = 1){//sempre q n for enviado um valor eles vão assumir esses valores
    const somaOfc = num1 + num2;
    return somaOfc;
}
const somaFeita = soma(5,7.6);
console.log(somaFeita);
console.log(soma2(6,8)); 

//const vendoRetorno = saudacao('Marco'); 
//console.log(vendoRetorno);

const raiz = function(n){
    return n ** 0.5;
};//função anonima

const mult = (n1,n2) =>  n1 * n2; //arrow function, se tiver só um valor pode tirar até os parenteses

console.log(mult(2,3));

console.log(raiz(9));