var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.get("/", function (req, res) {
    postController.testar(req, res);
});

router.get("/listarPosts", function (req, res) {
    postController.listarPosts(req, res);
});

router.get("/listarJogos", function (req, res) {
    postController.listarJogos(req, res);
});

router.get("/exibirArtigos", function (req, res) {
    postController.exibirArtigos(req, res);
});


// router.get(`/exibirArtigos/:idPostagem`, function (req, res) {
//     postController.exibirArtigos(req, res);
// });

router.get("/listarPosts/:idUsuario", function (req, res) {
    postController.listarUsuario(req, res);
});
router.post("/publicar/:idUsuario", function (req, res) {
    postController.publicar(req, res);
});
router.put("/editarPost/:idPostagem", function (req, res) {
    postController.editar(req, res);
});

router.delete("/deletar/:idPostagem", function (req, res) {
    postController.deletar(req, res);
});


router.get("/exibirArtigos/:idPostagem", function (req, res) {
    postController.exibirArtigos(req, res);
});
module.exports = router;

