import { Negociacao } from "./Negociacao.js";

export class Negociacoes{

    private negociacoes: Array<Negociacao> = []

    public adiciona(negociacao: Negociacao){ //adiciona um objeto do tipo Negociacao dentro da lista

        this.negociacoes.push(negociacao)
    }

    public lista():ReadonlyArray<Negociacao>{ // retorna uma lista
        
        return this.negociacoes
    }
}
