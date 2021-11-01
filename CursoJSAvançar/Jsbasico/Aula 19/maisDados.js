/*
Primitivos (imutáveis) - String, number, boolean, undefined, null: vistos/ bigint e symbol: n vistos
Referencia(Mutavel) - array , object, function - passados por referencia
*/
//Em dados primitivos vc muda o a valor da variavel. Imagine uma caixa com um adesivo, vc pode mudar o adesivo, mas n modificalo.

let a = 'A';
let b = a;
console.log(a,b);
a = 'outra coisa';
console.log(a,b);

let c = [1,2,3];
let d = c;
console.log(c,d);
c.push(4);
console.log(c,d);
d.pop();
console.log(c,d);
//dados n primitivos apontam para um lugar na memoria passado por referencia
const teste = {
    nome: 'Marco',
};
const teste2 = {...teste};// assim vc burla, e vc copia de fato o valor. Ou seja se vc mudar o de um n interfere no outro
console.log(teste, teste2);