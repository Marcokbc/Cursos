let quadrado = document.querySelector('#quadrado');
document.addEventListener("keydown", (e) => {
    let tecla = e.key;
    console.log("Pressionou a tecla " + tecla);
    switch(tecla){
        case 'a': 
            quadrado.classList.add("amarela");
            quadrado.classList.remove("vermelha");
        break;
        case 'v':
            quadrado.classList.add("vermelha");
            quadrado.classList.remove("amarela")
        break;
        default: 
            quadrado.classList.remove("vermelha","amarela");
        
    }
});

document.addEventListener("keyup", (e)=>{
    let tecla = e.key;
    console.log("Soltou a tecla "+ tecla)
    switch(tecla){
        case 'a': 
            quadrado.classList.add("vermelha");
            quadrado.classList.remove("amarela");
        break;
        case 'v':
            quadrado.classList.add("amarela");
            quadrado.classList.remove("vermelha")
        break;
        default: 
            quadrado.classList.remove("vermelha","amarela");
        
    }
});