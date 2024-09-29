// script.js
const botoesProximos = document.querySelectorAll('.btn-proximo');

botoesProximos.forEach(botao => {
    botao.addEventListener('click', () => {
        const proximoPasso = botao.dataset.proximo;
        const passoAtual = document.querySelector('.ativo');
        passoAtual.classList.remove('ativo');
        document.getElementById(`passo-${proximoPasso}`).classList.add('ativo');
    });
});
