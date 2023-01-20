import { Negociacao } from "./models/Negociacao.js";
const negociacao = new Negociacao(new Date(), 10, 20);
console.log(`quantidade é ${negociacao.quantidade}`);
console.log(`volume é ${negociacao.volume}`);
console.log(`data é ${negociacao.data}`);
console.log(`valor é ${negociacao.valor}`);
