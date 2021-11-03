function exerListaTarefas(){ 
const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas= document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoTarefa){
    const li = criaLi();
    li.innerText = textoTarefa;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li)
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);//Stringfy converte um elemento js para uma string no formato json
    localStorage.setItem('tarefas', tarefasJSON);//local no navegador para salvar coisas/mini base de dados. setando em um lugar('nome que vai recuperar', )  
}

function adcionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');//pegando
    const listaDeTarefas = JSON.parse(tarefas);//convertendo de volta de uma string json para um objeto js, array

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adcionaTarefasSalvas();
}
exerListaTarefas();