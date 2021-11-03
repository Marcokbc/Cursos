//Escopo léxco - a função conhece o local onde foi declarada, tudo o que foi declarado dentro dela, e o que ta nos vizinhos dela.
const nome = 'Luiz';

function falaNome(){
    // const nome = 'Otavio';
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Otavio';
    falaNome();
}
usaFalaNome();