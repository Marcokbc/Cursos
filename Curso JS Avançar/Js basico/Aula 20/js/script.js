function meuEscopo(){
    const todoform = document.querySelector('.todo_form');
    const resultado = document.querySelector('.result');

    const pessoas = [];

    //form.addEventListener('subimit');
    //form.onsubmit = function(e){
    //};
    todoform.addEventListener('submit', recebeEventoForm);
    function recebeEventoForm(event){
        event.preventDefault();
        const nome = todoform.querySelector('.nome');
        const sobrenome = todoform.querySelector('.sobrenome');
        const peso = todoform.querySelector('.peso');
        const altura = todoform.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` + `${peso.value} ${altura.value}</p>`;
        
    }

    
}

meuEscopo();    
