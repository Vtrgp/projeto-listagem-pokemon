const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    if (body.classList.contains("modo-escuro")) {
        body.classList.remove("modo-escuro");
        imagemBotaoTrocaTema.setAttribute("src", "./src/images/sun.png");
        imagemBotaoTrocaTema.setAttribute("alt", "imagem do sol");
    } else {
        body.classList.add("modo-escuro");
        imagemBotaoTrocaTema.setAttribute("src", "./src/images/moon.png");
        imagemBotaoTrocaTema.setAttribute("alt", "imagem da lua");
    }

});