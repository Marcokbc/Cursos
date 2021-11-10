let quadrado = document.querySelector("#quadrado");
let quadradoX = 700; //Posicionamento horizontal
let quadradoY = 200;
let quadradoTamanho = 100;

let alturaContainer = 600;
let larguraContainer = 800;

document.addEventListener("keydown",(e)=>{
    e.preventDefault();
    let tecla = e.key;
    switch(tecla){
        case 'ArrowUp':
            quadradoY -= 100;
            if(quadradoY <= 0){
                quadradoY = 0;
            }
            quadrado.style.top = quadradoY+"px";
        break;
        case 'ArrowDown':
            quadradoY += 100;
            if(quadradoY >= alturaContainer - quadradoTamanho){
                quadradoY = alturaContainer - quadradoTamanho;
            }
            quadrado.style.top = quadradoY+"px";
        break;
        case 'ArrowLeft':
            quadradoX -= 100;
            if(quadradoX <= 0){
                quadradoX = 0;
            }
            quadrado.style.left = quadradoX+"px";
        break;
        case 'ArrowRight':
            quadradoX += 100;
            if(quadradoX >= larguraContainer - quadradoTamanho){
                quadradoX = larguraContainer - quadradoTamanho;
            }
            quadrado.style.left = quadradoX+"px";
        break;
    }
});