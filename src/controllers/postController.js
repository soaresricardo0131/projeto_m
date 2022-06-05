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

function listarJogos(req, res) {
    postModel.listarJogos().then(function (resultado) {
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

function publicar(req, res) {
    var titulo = req.body.titulo;
    var imagem = req.body.imagem;
    var mensagem = req.body.mensagem;
    var idUsuario = req.params.idUsuario;

 
        postModel.publicar(titulo, imagem,mensagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function editarPost(req, res) {
    var novoTitulo = req.body.titulo;
    var novaImagem = req.body.imagem;
    var novaMensagem = req.body.mensagem;
    var idPost = req.params.idPostagem;

    postModel.editarPost(novoTitulo, novaImagem,novaMensagem, idPost)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

// function deletar(req, res) {
//     var idAviso = req.params.idAviso;

//     avisoModel.deletar(idAviso)
//         .then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }


function deletar(req, res) {
    var idPostagem = req.params.idPostagem;

    postModel.deletar(idPostagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function exibirArtigos(req, res) {
    var idPostagem = req.params.idPostagem;
    postModel.exibirArtigos(idPostagem).then(function (resultado) {
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

module.exports = {
    testar,
    listarPosts,
     listarUsuario,
     editarPost,
     publicar,
     exibirArtigos,
     listarJogos,
    // pesquisarDescricao,

    // editar,
     deletar
}