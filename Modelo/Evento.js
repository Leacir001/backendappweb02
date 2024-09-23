import EventoDAO from "../DAO/EventoDAO.js";

//DAO = Data Access Object -> Objeto de acesso aos dados
export default class Evento {
    //atributos privados
    #idEvento;
    #nomeEvento;
    #data;
    #local;
    #cidade;
    #estado;

    constructor(idEvento, nomeEvento, data, local, cidade, estado) {
        this.#idEvento = idEvento;
        this.#nomeEvento = nomeEvento;
        this.#data = data;
        this.#local = local;
        this.#cidade = cidade;
        this.#estado = estado;
    }

    get idEvento() {
        return this.#idEvento;
    }

    set idEvento(novoIdEvento) {
        this.#idEvento = novoIdEvento;
    }

    get nomeEvento() {
        return this.#nomeEvento;
    }

    set nomeEvento(novoNomeEvento) {
        this.#nomeEvento = novoNomeEvento;
    }

    get data() {
        return this.#data;
    }

    set data(novaData) {
        this.#data = novaData;
    }

    get local() {
        return this.#local;
    }

    set local(novoLocal) {
        this.#local = novoLocal;
    }

    get cidade() {
        return this.#cidade;
    }

    set cidade(novaCidade) {
        this.#cidade = novaCidade;
    }

    get estado() {
        return this.#estado;
    }

    set estado(novoEstado) {
        this.#estado = novoEstado;
    }

    toString() {
        return `ID Evento: ${this.#idEvento}
Nome Evento: ${this.#nomeEvento}
Data: ${this.#data}
Local: ${this.#local}
Cidade: ${this.#cidade}
Estado: ${this.#estado}`;
    }

    // Método toJSON para retorno de um objeto JSON
    toJSON() {
        return {
            idEvento: this.#idEvento,
            nomeEvento: this.#nomeEvento,
            data: this.#data,
            local: this.#local,
            cidade: this.#cidade,
            estado: this.#estado
        }
    }

    async gravar() {
        const eventoDAO = new EventoDAO();
        await eventoDAO.gravar(this);
    }

    async atualizar() {
        const eventoDAO = new EventoDAO();
        await eventoDAO.atualizar(this);
    }

    async excluir() {
        const eventoDAO = new EventoDAO();
        await eventoDAO.excluir(this);
    }

    async consultar(termoBusca) {
        const eventoDAO = new EventoDAO();
        return await eventoDAO.consultar(termoBusca);
    }
}
