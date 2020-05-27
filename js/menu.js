document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};

/** 
 * 
 * Estamos usando JavaScript puro no exemplo, mas fique livre para usar algum framework como jQuery.

O JS é bem simples: adiciona eventos de clique nos dois botões que adicionam/removem uma classe menu-ativo no elemento <html> (acessado em JS via document.documentElement).

(se quiser testar já agora, abra o Console no seu navegador e clique nos botões enquanto observa a tag <html> recebendo/removendo a classe).
*/

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};

/*
E ainda podemos incrementar o JavaScript para permitir que o usuário clique na área cinza de fundo para fechar o menu.
**/