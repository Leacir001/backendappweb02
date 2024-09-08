import conectar from "./Conexao.js";
import Evento from "../Modelo/Evento.js";

export default class EventoDAO {

    constructor() {
        this.init(); //inicializar o banco de dados
    }

    async init() {
        try {
            const conexao = await conectar();
            const sql = `CREATE TABLE IF NOT EXISTS evento (
                    idEvento INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                    nomeEvento VARCHAR(100) NOT NULL, 
                    data DATE NOT NULL, 
                    local VARCHAR(200) NOT NULL, 
                    cidade VARCHAR(100) NOT NULL, 
                    estado VARCHAR(2) NOT NULL);`;
            await conexao.execute(sql);
            await global.poolConexoes.releaseConnection(conexao);
            console.log("Banco de dados de eventos iniciado com sucesso!");
        } catch (erro) {
            console.log("O banco de dados não pode ser iniciado!");
        }
    }

    async gravar(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = `INSERT INTO evento(nomeEvento, data, local, cidade, estado) 
                        VALUES (?, ?, ?, ?, ?);`;
            const parametros = [
                evento.nomeEvento,
                evento.data,
                evento.local,
                evento.cidade,
                evento.estado
            ];
            await conexao.execute(sql, parametros);
            await global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = `UPDATE evento SET nomeEvento = ?, 
                        data = ?, 
                        local = ?, 
                        cidade = ?, 
                        estado = ? 
                        WHERE idEvento = ?;`;
            const parametros = [
                evento.nomeEvento,
                evento.data,
                evento.local,
                evento.cidade,
                evento.estado,
                evento.idEvento
            ];
            await conexao.execute(sql, parametros);
            await global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = `DELETE FROM evento WHERE idEvento = ?;`;
            const parametros = [evento.idEvento];
            await conexao.execute(sql, parametros);
            await global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(termoBusca) {
        let sql = "";
        let parametros = [];
        if (termoBusca) { //se o termo de busca existir, busca será por idEvento
            sql = `SELECT * FROM evento WHERE idEvento = ? ORDER BY nomeEvento;`;
            parametros.push(termoBusca);
        } else {
            sql = `SELECT * FROM evento ORDER BY nomeEvento;`;
        }

        const conexao = await conectar();
        const [registros] = await conexao.execute(sql, parametros);
        let listaEventos = [];
        for (const registro of registros) {
            const evento = new Evento(
                registro.idEvento,
                registro.nomeEvento,
                registro.data,
                registro.local,
                registro.cidade,
                registro.estado
            );
            listaEventos.push(evento);
        }
        await global.poolConexoes.releaseConnection(conexao);
        return listaEventos;
    }
}
