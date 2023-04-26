var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.get("/", function (req, res) {
    maquinaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    maquinaController.listar(req, res);
});

router.post("/cadastrarEndereco", function (req, res) {
    maquinaController.cadastrarEndereco(req, res);
})

router.post("/cadastrarMaquina", function (req, res) {
    maquinaController.cadastrarMaquina(req, res);
})

module.exports = router;