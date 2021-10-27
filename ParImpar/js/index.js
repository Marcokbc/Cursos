let inputUsu = document.querySelector("#numUsu");
let result = document.querySelector("#result");
let machineTotalString = document.querySelector("#totalMachine");
let playerTotalString = document.querySelector("#totalPlayer");


document.getElementById("btnEnviar").addEventListener("click", function(e){
    e.preventDefault();

    let stringUsu = (inputUsu.value);
    let numUsu = parseInt(stringUsu);
    let numMaquina = parseInt(Math.random() * (10));
    let resultSoma = numUsu + numMaquina;
    let resto = resultSoma % 2;
    let machineTotal = (machineTotalString.value);
    let playerTotal = (playerTotalString.value);
    console.log(numMaquina);
    
    if(resto == 0){
        result.innerHTML = "PLAYER WINS";
        playerTotal.innerHTML += 1;
    }else{
        result.innerHTML = "MACHINE WINS";
        machineTotal.innerHTML += 1;
    }

});