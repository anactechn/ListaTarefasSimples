document.addEventListener('DOMContentLoaded', () => {
    const inputTarefa = document.getElementById('nova-tarefa');
    const botaoAdicionar = document.getElementById('adicionar');
    const listaTarefas = document.getElementById('lista-tarefas');

    function adicionarTarefa() {
        const texto = inputTarefa.value.trim();
        if (texto) {
            const li = document.createElement('li');
            li.textContent = texto;
            
            li.addEventListener('click', () => {
                li.classList.toggle('concluida');
            });
            
            listaTarefas.appendChild(li);
            inputTarefa.value = '';
            
            li.style.transform = 'scale(0.9)';
            li.style.opacity = '0';
            setTimeout(() => {
                li.style.transform = 'scale(1)';
                li.style.opacity = '1';
            }, 10);
        }
    }

    botaoAdicionar.addEventListener('click', adicionarTarefa);
    
    inputTarefa.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') adicionarTarefa();
    });
});