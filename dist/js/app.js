import { NegociacaoController } from "./controllers/negocicao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
// const botao = document.querySelector('#botao')
// botao.addEventListener('click', event =>{
//     event.preventDefault()
//     controller.adiciona()
// })
form.addEventListener('submit', event => {
    event.preventDefault(); // permite não carregar a pagina quando realizar o evento de submit não fazendo o refresh
    controller.adiciona();
});
