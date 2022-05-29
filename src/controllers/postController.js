var postModel = require("../models/postModel");

function testar(req, res) {
    console.log("ENTRAMOS NO postController");
    res.send("ENTRAMOS NO POST CONTROLLER");
}

function listarPosts(req, res) {
    postModel.listarPosts().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function listarUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    postModel.listarUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
module.exports = {
    testar,
    listarPosts,
     listarUsuario
    // pesquisarDescricao,

    // editar,
    // deletar
}