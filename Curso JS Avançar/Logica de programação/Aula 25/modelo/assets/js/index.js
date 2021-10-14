function Escopo(){
    const formu = document.querySelector('.formu');
    formu.addEventListener('submit', function(e){
        e.preventDefault();
    });
    function setResultado(msg){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = msg; 
    }

}
Escopo();