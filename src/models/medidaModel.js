var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

 if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select jogousuario,count(jogoUsuario) as re from usuario group by jogoUsuario desc;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select jogoUsuario, count(jogousuario) as re from usuario group by jogoUsuario;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
