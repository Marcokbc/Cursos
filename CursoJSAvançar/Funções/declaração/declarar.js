//Declaração de função mais literal (function hoisting => a engine do js eleva a função ao topo)
falaOi();
function falaOi(){
    console.log('Oi');
}

//First-class-object (Objetos de primeira classe)
//function expression

const souUmDado = function(){
    console.log('Sou um dado');
};

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

//arrow function
const funcaoArrow = () => {
    console.log('Sou uma arraow funcrion');
};
funcaoArrow();

//Dentro de um objeto

const onj = {
    falar: function(){
        console.log('estou falando');
    }
};
onj.falar();
