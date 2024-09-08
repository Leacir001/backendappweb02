import Evento from "./Modelo/Evento.js"; //nunca se esqueça da extensão .js

//const evento = new Evento(1, "Grelo", "2024-10-05", "Centro de Convenções", "Maringa", "PR");
//const evento = new Evento(1, "Thulio Milionário", "2024-10-06", "Centro de Convenções", "Maringa", "PR");
const evento = new Evento(1, "Lauana prado", "2024-10-07", "Centro de Convenções", "Maringa", "PR");



//gravar
/*evento.gravar().then(() => {  // Agora estamos chamando o método a partir da instância "evento"
console.log("Evento gravado com sucesso!");
}).catch((erro) => {
    console.log(erro.message);
});*/

//Atualizar
/*const eventoAtualizado = new Evento(1, "Grelo", "2024-10-05", "Centro de Convenções", "Maringa", "PR");

eventoAtualizado.atualizar().then(() => {
    console.log('Evento Atualizado!');
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
const eventoQQ = new Evento();

eventoQQ.consultar().then((lista_evento) => {
    console.log("Evento encontrados:");
    for (const evento of lista_evento) {
        console.log(evento.toJSON());
    }
}).catch((erro) => {
    console.log("Não foi possível consultar o evento", erro);
});


