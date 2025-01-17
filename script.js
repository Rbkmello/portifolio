//A validação do formulário com javascript é considerado um desafio extra, não é preciso fazer esta validação para realizar sua entrega
// Seleciona todos os links do menu
const linksMenu = document.querySelectorAll('.navegacao__elemento a');

// Adiciona o evento de clique para cada link
linksMenu.forEach(link => {
    link.addEventListener('click', function (event) {
        // Previne o comportamento padrão do clique no link
        event.preventDefault();

        // Obtém o id do destino a partir do atributo href do link
        const idDestino = this.getAttribute('href');
        const destino = document.querySelector(idDestino);

        // Calcula a altura do cabeçalho
        const alturaCabecalho = document.querySelector('header').offsetHeight; // Altere 'header' para o seletor correto do seu cabeçalho

        // Faz o scroll suave até o destino, ajustando a posição
        window.scrollTo({
            top: destino.offsetTop - alturaCabecalho, // Ajusta a posição do scroll
            behavior: 'smooth'
        });
    });
});

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const statusMessage = document.getElementById('mensagemDeStatus');

    // Validação simples
    if (!nome || !email || !mensagem) {
        statusMessage.textContent = 'Por favor, preencha todos os campos.';
        statusMessage.style.color = 'red';
        return;
    }

    // Simulação de envio do formulário
    statusMessage.textContent = 'Mensagem enviada com sucesso!';
    statusMessage.style.color = 'green';

    // Esconde a mensagem após 2 segundos e remove a cor
    setTimeout(() => {
        statusMessage.textContent = '';
        statusMessage.style.color = '';
    }, 5000);

     // Reseta os campos do formulário
     document.getElementById('formContato').reset();
    });


window.addEventListener('scroll', function() {
    const cabecalho = document.querySelector('.cabecalho');
    if (window.scrollY > 100) {
        cabecalho.classList.add('shrink');
    } else {
        cabecalho.classList.remove('shrink');
    }
});

