const pessoa = {
    nome: 'Luiz',
    sobrenome:'Miranda',
    idade: 30,
    endereco:{
        rua:'Av Brasil',
        numero:320,
    }
};

const {nome: n= '',sobrenome,endereco:{rua,...resto},endereco} = pessoa;
console.log(n,rua,resto); 