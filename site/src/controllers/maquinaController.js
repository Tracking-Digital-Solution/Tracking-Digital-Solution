var maquinaModel = require("../models/maquinaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA maquinaModel");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    maquinaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarMaquina(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    //Cadastrar lugar 
    var nomeMaquina = req.body.nomeMaquinaServer;
    var fkPerfil = req.body.fkPerfilServer; 
    var cep = req.body.cepServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var logradouro = req.body.logradouroServer;
    var numero = req.body.numeroServer;
    var complemento = req.body.complementoServer;
        // Passe os valores como parâmetro e vá para o arquivo maquinaController.js
        maquinaModel.cadastrarMaquina(nomeMaquina, fkPerfil,cep, estado,cidade, bairro, logradouro, numero, complemento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

function buscarDados(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    //Cadastrar lugar 
    var fkPerfil = req.body.fkIdGerente; 
        // Passe os valores como parâmetro e vá para o arquivo maquinaController.js
        maquinaModel.buscarDados(fkPerfil)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

function buscarDadosTi(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    //Cadastrar lugar 
    var fkPerfil = req.body.fkIdTi; 
        // Passe os valores como parâmetro e vá para o arquivo maquinaController.js
        maquinaModel.buscarDadosTi(fkPerfil)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


function cadastrarEndereco(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    //Cadastrar lugar 
    var cep = req.body.cepServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var logradouro = req.body.logradouroServer;
    var numero = req.body.numeroServer;
    var complemento = req.body.complementoServer;
    console.log(cep);
    console.log(estado);
    console.log(cidade);
    console.log(bairro);
    console.log(logradouro);
    console.log(numero);
    console.log(complemento);


    // Faça as validações dos valores
    if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if(bairro == undefined){
        res.status(400).send("Seu bairro está undefined!");
    }else if(logradouro == undefined){
        res.status(400).send("Seu logradouro está undefined!");
    }else if(numero == undefined){
        res.status(400).send("Seu numero está undefined!");
    }else if(complemento == undefined){
        res.status(400).send("Seu complemento está undefined!");
    }


    else {
        // Passe os valores como parâmetro e vá para o arquivo maquinaController.js
        maquinaModel.cadastrarEndereco(cep, estado, cidade, bairro, logradouro, numero, complemento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listar,
    testar,
    cadastrarEndereco,
    cadastrarMaquina,
    buscarDados,
    buscarDadosTi
}