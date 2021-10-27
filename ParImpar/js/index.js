let inputUsu = document.querySelector("#numUsu");
let elTotalMachine = document.querySelector("#totalMachine");
let elTotalPlayer = document.querySelector("#totalPlayer");
let btnJogar = document.querySelector("#btnJogar");
let result = document.querySelector("#result");
let btnReiniciar = document.querySelector("#btnReiniciar");

let numMaquina = null;
let soma = null;
let resto = null;
let TotalMachine = 0;
let TotalPlayer = 0;

btnJogar.addEventListener("click", function(e){
    e.preventDefault();
    numMaquina = parseInt(Math.random() * 10);
    let numPlayer = inputUsu.value;
    if(numPlayer == ""){
        alert("Informe um Numero");
        
    }else{ 
        
        soma = numPlayer + numMaquina;
        resto = soma % 2;

        if(resto == 0){
            result.innerHTML = "PLAYER WINS";
            TotalPlayer++;
            elTotalPlayer.innerHTML = TotalPlayer;
        }else{
            result.innerHTML = "MACHINE WINS";
            TotalMachine++;
            elTotalMachine.innerHTML = TotalMachine;
        }
    }
});

btnReiniciar.addEventListener("click", function(e){
    e.preventDefault();

    numPlayer = null;
    numMaquina = null;

    inputUsu.value = "";
    result.innerHTML = "";
});
