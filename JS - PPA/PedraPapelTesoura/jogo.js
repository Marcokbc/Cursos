//Selecionando os elementos e os jogando em variaveis
let botoesJogador = document.querySelectorAll(".btn-jogador");
let botaoPlay = document.querySelector("#btn-play");
let elmensagem = document.querySelector(".mensagem"); 
let botoesComputador = document.querySelectorAll(".btn-computador");
let elPlacarJogador = document.querySelector('#jogador .vitorias');
let elPlacarComputador = document.querySelector("#computador .vitorias");

let escolhaComputador = null;
let escolhaJogador = null;
let placarJogador = 0;
let placarComputador = 0;

//Criando o Botão Reiniciar dinamicamente

let botaoReiniciar = document.createElement("button");
botaoReiniciar.innerHTML = "Reiniciar Jogo";

//atribuindo eventos

for(let i = 0; i <= 2; i++){
    botoesJogador[i].addEventListener("click",cliqueJogador);
}

botaoPlay.addEventListener("click",jogar);

botaoReiniciar.addEventListener("click",reiniciar);

function cliqueJogador(e){

    for(let i = 0;i <= 2; i++){
        botoesJogador[i].style.opacity = "10%";
    }

    let elemento = e.target;
    elemento.style.opacity = "100%";

    escolhaJogador = elemento.dataset.opcao;
    botaoPlay.disabled = false;

}

function jogar(){
    let opcoesComputador = ['pedra','papel','tesoura'];
    let sorteio = Math.floor(Math.random() * 3); 
    escolhaComputador = opcoesComputador[sorteio];

    botaoPlay.disabled = true;
    botoesComputador[sorteio].style.opacity = "100%";
    console.log(escolhaComputador);
    if(escolhaComputador == escolhaJogador){
        elmensagem.innerHTML = "<h3>EMPATE</h3>";
    }else if(escolhaComputador == "pedra" && escolhaJogador == "tesoura" || escolhaComputador == "tesoura" && escolhaJogador == "papel" || escolhaComputador == "papel" && escolhaJogador == "pedra"){ 
        elmensagem.innerHTML = "<h3>MACHINE WINS</h3>";
        placarComputador++;
        elPlacarComputador.innerHTML = placarComputador;
    }else{
        elmensagem.innerHTML = "<h3>PLAYER WINS</h3>";
        placarJogador++;
        elPlacarJogador.innerHTML = placarJogador;
    }

    elmensagem.appendChild(botaoReiniciar);
}

function reiniciar(){

    for(let i = 0;i <= 2; i++){
        botoesJogador[i].style.opacity = "10%";
        botoesComputador[i].style.opacity = "10%";
    }

    escolhaJogador = null;
    escolhaComputador = null;

    elmensagem.innerHTML = "";
}