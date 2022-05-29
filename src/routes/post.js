var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.get("/", function (req, res) {
    postController.testar(req, res);
});

router.get("/listarPosts", function (req, res) {
    postController.listarPosts(req, res);
});

router.get("/listarUsuario", function (req, res) {
    postController.listarUsuario(req, res);
});
module.exports = router;