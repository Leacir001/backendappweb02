//O banco de dados que será utilizado será o MYSQL
import mysql from 'mysql2/promise';

export default async function conectar() {
    if (global.poolConexoes) {
        return await global.poolConexoes.getConnection();
    } else {
        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root', // deve ser desencorajado para ambientes de produção
            port: 3306,
            password: '',
            database: 'eventoappweb02', // Verifique se o nome do banco está correto
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, // max idle connections, o valor padrão é igual ao `connectionLimit`
            idleTimeout: 60000, // timeout de conexões ociosas em milissegundos
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
        });

        global.poolConexoes = pool;

        return await global.poolConexoes.getConnection();
    }
}
