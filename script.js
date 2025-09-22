document.getElementById('perguntaBtn').addEventListener('click', function() {
    const botoes = document.getElementById('botoes');
    botoes.classList.toggle('hidden'); // Mostra os botões "Peitinho do Galego" e "Marretada do Thor"
});

document.getElementById('peitinhoBtn').addEventListener('click', function() {
    const resposta = document.getElementById('resposta');
    resposta.innerHTML = '<p>Você escolheu Peitinho do Galego!</p>';
    resposta.classList.remove('hidden');
});

document.getElementById('marretadaBtn').addEventListener('click', function() {
    const resposta = document.getElementById('resposta');
    resposta.innerHTML = '<p>Você escolheu Marretada do Thor!</p>';
    resposta.classList.remove('hidden');
});
