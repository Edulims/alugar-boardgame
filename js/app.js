function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar'; // Alterando o texto do botão
        botao.classList.remove('dashboard__item__button--return'); // Removendo a classe do botão
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver'; // Alterando o texto do botão
        botao.classList.add('dashboard__item__button--return'); // Adicionando a classe do botão
    }
}