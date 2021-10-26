let areaElementos = document.querySelector("#areaElementos");
let conteudo = document.querySelector("#conteudo");
let botao = document.querySelector("#criarElementos");

botao.addEventListener("click",function(){
    if(conteudoTextual != ""){
        let conteudoTextual = conteudo.value;

        let elementoNovo = document.createElement("h1");
        elementoNovo.innerText = conteudoTextual;

        areaElementos.appendChild(elementoNovo);

        conteudo.value = "";

    }else{
        alert("O campo precisa ser preenchido");
    }
});