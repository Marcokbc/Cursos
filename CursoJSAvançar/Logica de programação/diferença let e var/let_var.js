const verdadeira = true;

//let tem escopo por bloco {...bloco} (Busca de dentro para fora)
//var tem escopo por função

let nome = 'Luiz';
var nome2 = 'Luiz';

if(verdadeira){
    let nome = 'Otavio';
    console.log(nome, nome2);

    if(verdadeira){
        let nome = 'outra coisa';
        var nome2 = 'João';
        console.log(nome, nome2);
    }
}
console.log(nome, nome2);

var sobrenome = 'Meira';

function fala(){
    console.log(sobrenome);
    var nomeI = 'Luiz';

}
//console.log(nomeI);
//Se vc cria uma variavel dentro de um if dentro de uma funçao com let vc n pode acessar ela dps mesmo na função já com var pode  

fala();

//Hosting

console.log(jubileu);//O hosting nada mais é do que elevar a sua variavel porem sem dizer seu conteudo apenas quando vc dizer
var jubileu = "Miranda";
//Não ocorre hosting com let