let container = document.getElementById('container');
let input = document.getElementById('input');
let botaoAddTarefa = document.getElementById('botaoAddTarefa');
let containerTarefas = document.getElementById('containerTarefas');

botaoAddTarefa.addEventListener('click', function criarTarefa(){
    let valorInput = input.value;

    let containerDivTarefas = document.createElement('div');
    containerDivTarefas.setAttribute('class', 'containerDivTarefas');
    containerTarefas.appendChild(containerDivTarefas);

    let divTarefas = document.createElement('div');
    divTarefas.setAttribute('class', 'divTarefas');
    containerDivTarefas.appendChild(divTarefas);

    let textoTarefa = document.createElement('label');
    textoTarefa.setAttribute('class', 'textoTarefa');
    divTarefas.appendChild(textoTarefa);
    textoTarefa.innerHTML = valorInput;

    input.value = ''

    let botaoRemoverTarefa = document.createElement('button');
    botaoRemoverTarefa.setAttribute('id', 'botaoRemoveTarefa');
    containerDivTarefas.appendChild(botaoRemoverTarefa);

    let imagemBotaoRemoverTarefa = document.createElement('img');
    imagemBotaoRemoverTarefa.setAttribute('class', 'imagemBotaoRemoverTArefa');
    imagemBotaoRemoverTarefa.src = '/img/iconeLixeira.png';
    botaoRemoverTarefa.appendChild(imagemBotaoRemoverTarefa);

    divTarefas.addEventListener('click', function tarefaConcluida(){
        textoTarefa.style.textDecoration = 'line-through';

        let iconeTarefaConcluida = document.createElement('img');
        iconeTarefaConcluida.src = '/img/iconeTarefaConcluida.png';
        iconeTarefaConcluida.setAttribute('class', 'iconeTarefaConcluida');
        divTarefas.appendChild(iconeTarefaConcluida);
        divTarefas.removeEventListener('click', tarefaConcluida);
    });

    botaoRemoverTarefa.addEventListener('click', function(){
        containerTarefas.removeChild(containerDivTarefas);
        containerTarefas.removeChild(botaoRemoverTarefa);
    });
});
