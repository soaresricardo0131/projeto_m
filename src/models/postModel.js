var database = require("../database/config");


function listarPosts() {
    console.log("ACESSEI O POST  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPosts()");
    var instrucao = `
    select tituloPostagem,conteudoPostagem,imgPostagem,date_format(dataPost, '%d/%m/%Y') AS dataPost,usuario.nomeUsuario
from Postagem
inner join Usuario on usuario.idUsuario = Postagem.fkusuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsuario(idUsuario) {
    console.log("ACESSEI O listarUsuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    select * from postagem
    inner join Usuario on idUsuario = fkUsuario
    where idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarPosts,
    listarUsuario

}