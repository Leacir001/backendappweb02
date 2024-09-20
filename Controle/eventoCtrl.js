import { application } from "express";
import Evento from "../Modelo/Evento.js";

export default class EventoCtrl {

    gravar(requisicao, resposta) {
        if (requisicao.method === "POST" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const { id, titulo, data, local, descricao } = dados;

            if (id && titulo && data && local && descricao) {
                const evento = new Evento(id, titulo, data, local, descricao);

                evento.incluir().then(() => {
                    resposta.status(201).json({
                        "status": true,
                        "mensagem": "Evento incluído com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao incluir o evento: " + erro.message
                    });
                });

            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Requisição inválida! Informe todos os dados do evento!"
                });
            }
        } else {
            resposta.status(405).json({
                "status": false,
                "mensagem": "Requisição inválida!"
            });
        }
    }

    alterar(requisicao, resposta) {
        if ((requisicao.method === "PUT" || requisicao.method === "PATCH") && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const { id, titulo, data, local, descricao } = dados;

            if (id && titulo && data && local && descricao) {
                const evento = new Evento(id, titulo, data, local, descricao);
                evento.alterar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Evento alterado com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao alterar o evento: " + erro.message
                    });
                });
            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Requisição inválida! Informe todos os dados do evento!"
                });
            }
        } else {
            resposta.status(405).json({
                "status": false,
                "mensagem": "Requisição inválida!"
            });
        }
    }

    excluir(requisicao, resposta) {
        if (requisicao.method === "DELETE" && requisicao.is("application/json")) {
            const { id } = requisicao.body;

            if (id) {
                const evento = new Evento(id);
                evento.excluir().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Evento excluído com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao excluir o evento: " + erro.message
                    });
                });
            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Requisição inválida! Informe o ID do evento!"
                });
            }
        } else {
            resposta.status(405).json({
                "status": false,
                "mensagem": "Requisição inválida!"
            });
        }
    }

    consultar(requisicao, resposta) {
        let termoBusca = requisicao.params.termoBusca || "";

        if (requisicao.method === "GET") {
            const evento = new Evento();
            evento.consultar(termoBusca).then((eventos) => {
                resposta.status(200).json({
                    "status": true,
                    "listaEventos": eventos
                });
            }).catch((erro) => {
                resposta.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao consultar os eventos: " + erro.message
                });
            });
        } else {
            resposta.status(405).json({
                "status": false,
                "mensagem": "Requisição inválida! Consulte a documentação."
            });
        }
    }
}







/*import { application } from "express";
import Cliente from "../Modelo/cliente.js";

export default class ClienteCtrl {

    gravar(requisicao, resposta) {
        if (requisicao.method === "POST" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const { cpf, nome, endereco, cidade, estado } = dados;

            if (cpf && nome && endereco && cidade && estado) {
                const cliente = new Cliente(cpf, nome, endereco, cidade, estado);

                cliente.incluir().then(() => {
                    resposta.status(201).json({
                        "status": true,
                        "mensagem": "Cliente incluído com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao incluir o cliente: " + erro.message
                    });
                });

            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Requisição inválida! Informe todos os dados do cliente!"
                });
            }
        } else {
            resposta.status(405).json({
                "status": false,
                "mensagem": "Requisição inválida!"
            });
        }
    }

    alterar(requisicao, resposta) {
        if ((requisicao.method === "PUT" || requisicao.method === "PATCH") && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const { cpf, nome, endereco, cidade, estado } = dados;

            if (cpf && nome && endereco && cidade && estado) {
                const cliente = new Cliente(cpf, nome, endereco, cidade, estado);
                cliente.alterar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Cliente alterado com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao alterar o cliente: " + erro.message
                    });
                });
            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Requisição inválida! Informe todos os dados do cliente!"
                });
            }
        } else {
            resposta.status(405).json({
                "status": false,
                "mensagem": "Requisição inválida!"
            });
        }
    }

    excluir(requisicao, resposta) {
        if (requisicao.method === "DELETE" && requisicao.is("application/json")) {
            const { cpf } = requisicao.body;

            if (cpf) {
                const cliente = new Cliente(cpf);
                cliente.excluir().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Cliente excluído com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao excluir o cliente: " + erro.message
                    });
                });
            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Requisição inválida! Informe o CPF do cliente!"
                });
            }
        } else {
            resposta.status(405).json({
                "status": false,
                "mensagem": "Requisição inválida!"
            });
        }
    }

    consultar(requisicao, resposta) {
        let termoBusca = requisicao.params.termoBusca || "";

        if (requisicao.method === "GET") {
            const cliente = new Cliente();
            cliente.consultar(termoBusca).then((clientes) => {
                resposta.status(200).json({
                    "status": true,
                    "listaClientes": clientes
                });
            }).catch((erro) => {
                resposta.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao consultar os clientes: " + erro.message
                });
            });
        } else {
            resposta.status(405).json({
                "status": false,
                "mensagem": "Requisição inválida! Consulte a documentação."
            });
        }
    }
}*/
