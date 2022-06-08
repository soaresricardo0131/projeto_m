var database = require("../database/config");


function listarPosts() {
    console.log("ACESSEI O POST  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPosts()");
    var instrucao = `
    select idPostagem,tituloPostagem,conteudoPostagem,imgPostagem,date_format(dataPost, '%d/%m/%Y') AS dataPost,usuario.nomeUsuario
from Postagem
inner join Usuario on usuario.idUsuario = Postagem.fkusuario
order by dataPost desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarJogos() {

    instrucaoSql = ''

        instrucaoSql = `select jogoUsuario, count(jogousuario) as re from usuario group by jogoUsuario;`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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

function exibirArtigos(idPostagem) {
    console.log("ACESSEI O listarUsuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirArtigos()");
    var instrucao = `
    select idPostagem, tituloPostagem,conteudoPostagem,imgPostagem,date_format(dataPost, '%d/%m/%Y') AS datapost,usuario.nomeUsuario
	from Postagem
	inner join Usuario on usuario.idUsuario = Postagem.fkusuario
    where idPostagem = '${idPostagem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dadosQuiz() {
    console.log("ACESSEI O listarUsuario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirArtigos()");
    var instrucao = `
    select pontuacao,acertos,date_format(data_ranking, '%d-%m-%Y') as data_ranking, nomeUsuario from ranking
    join usuario on idUsuario = fkNome
    order by pontuacao desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function publicar(titulo, img, mensagem,idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, img, mensagem,idUsuario);
    var instrucao = `
    INSERT INTO Postagem (tituloPostagem, conteudoPostagem, imgPostagem,dataPost,fkUsuario) 
    VALUES ('${titulo}', '${mensagem}', '${img}',now(),${idUsuario});
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function editarPost(novoTitulo, novaImagem,novaMensagem, idPost) {
    console.log("ACESSEI O post MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
    var instrucao = `
        UPDATE Postagem SET tituloPostagem = '${novoTitulo}', imgPostagem = '${novaImagem}',
        conteudoPostagem = '${novaMensagem}'
         WHERE idPostagem = ${idPost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idPostagem) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPostagem);
    var instrucao = `
    delete from postagem where idPostagem = '${idPostagem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listarPosts,
    listarUsuario,
    listarJogos,
    editarPost,
    publicar,
    exibirArtigos,
    dadosQuiz,
    deletar

}