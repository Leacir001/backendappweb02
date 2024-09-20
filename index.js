//import Evento from "./Modelo/Evento.js"; //nunca se esqueça da extensão .js
import express from "express";
import rotaEvento from "./Rotas/rotaEvento.js";  // Substituí rotaCliente por rotaEvento

const app = express();
const host = "0.0.0.0";
const porta = 4000;

app.use(express.json());

app.use('/evento', rotaEvento);  // Mudado para rotaEvento

app.listen(porta, host, () => {
    console.log(`servidor iniciado em http://${host}:${porta}`);
});

//const evento = new Evento(1, "Grelo", "2024-10-05", "Centro de Convenções", "Maringa", "PR");
//const evento = new Evento(1, "Thulio Milionário", "2024-10-06", "Centro de Convenções", "Maringa", "PR");
//const evento = new Evento(1, "Lauana Prado", "2024-10-07", "Centro de Convenções", "Maringa", "PR");

// Gravar
/*evento.gravar().then(() => {  // Agora estamos chamando o método a partir da instância "evento"
    console.log("Evento gravado com sucesso!");
}).catch((erro) => {
    console.log(erro.message);
});*/

// Atualizar
/*const eventoAtualizado = new Evento(1, "Grelo", "2024-10-05", "Centro de Convenções", "Maringa", "PR");

eventoAtualizado.atualizar().then(() => {
    console.log('Evento atualizado!');
}).catch((erro) => {
    console.log(erro.message);
});*/

// Excluir
/*const eventoExcluido = new Evento(6);

eventoExcluido.excluir().then(() => {
    console.log('Evento excluído!');
}).catch((erro) => {
    console.log(erro.message);
});*/

// Consultar
/*const eventoQQ = new Evento();

eventoQQ.consultar().then((lista_evento) => {
    console.log("Eventos encontrados:");
    for (const evento of lista_evento) {
        console.log(evento.toJSON());
    }
}).catch((erro) => {
    console.log("Não foi possível consultar o evento", erro);
});*/
