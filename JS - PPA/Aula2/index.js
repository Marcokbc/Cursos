let meliante = document.querySelector(".titulo");

meliante.addEventListener("click",clicouNoElemento);

function clicouNoElemento(){
    meliante.style.color = "red"
}

let marginal = document.querySelector("#subtitulo");

marginal.addEventListener("mouseover", function(){
    marginal.style.backgroundColor = "green";
});
marginal.addEventListener("mouseout", function(){
    marginal.style.backgroundColor = "transparent";
})