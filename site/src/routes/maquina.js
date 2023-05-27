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
});

router.post("/cadastrarMaquina", function (req, res) {
    maquinaController.cadastrarMaquina(req, res);
});

router.delete("/deletar/:ID", function (req, res) {
    maquinaController.deletarMaquina(req, res);
});

router.post("/buscarDadosFuncionario", function (req, res) {
    maquinaController.buscarDadosFuncionario(req, res);
})

router.post("/buscarDadosMaquina/:idPerfil", function (req, res) {
    maquinaController.buscarDadosMaquina(req, res);
})

router.post("/buscarDadosTi/:IDTI/:IDADMIN", function (req, res) {
    maquinaController.buscarDadosTi(req, res);
})

router.put("/alterarParametroCPU", function (req, res) {
    maquinaController.alterarParametroCPU(req, res);
});

router.put("/alterarParametroRAM", function (req, res) {
    maquinaController.alterarParametroRAM(req, res);
});

router.put("/alterarParametroDisco", function (req, res) {
    maquinaController.alterarParametroDisco(req, res);
});

router.post("/buscarDadosDinamicos", function (req, res) {
    maquinaController.buscarDadosDinamicos(req, res);
})

module.exports = router;