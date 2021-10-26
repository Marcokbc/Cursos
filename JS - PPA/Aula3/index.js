let elementos = document.querySelectorAll(".titulo");

for(let i = 0; i <= 1; i++){
    elementos[i].addEventListener("click",acaoClick);
}

function acaoClick(event){
    for(let i=0;i<=1;i++){
    elementos[i].style.background = "transparent";
    }
    
    let elementoCLicado = event.target;
    elementoCLicado.style.background = "red";
}