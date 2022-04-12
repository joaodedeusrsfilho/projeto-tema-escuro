const botao = document.getElementById("botao");

botao.addEventListener("click", (evento) => {
    document.body.classList.toggle("temaEscuro", evento.target.checked);
})

