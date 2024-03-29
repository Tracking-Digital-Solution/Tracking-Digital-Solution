var perfilModel = require("../models/perfilModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA perfilController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    perfilModel.listar()
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

function deletarFunc(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    //Cadastrar lugar 
    var id = req.body.IDF
    // Passe os valores como parâmetro e vá para o arquivo maquinaController.js
    perfilModel.deletarFunc(id)
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

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        perfilModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cpf = req.body.cpfServer;
    var perfilAdministrador = req.body.perfilAdministrador;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo perfilModel.js
        perfilModel.cadastrar(nome, email, senha, cpf, perfilAdministrador)
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

function cadastrarFuncionario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cpf = req.body.cpfServer;
    var fkPerfil = req.body.fkPerfilServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo perfilModel.js
        perfilModel.cadastrarFuncionario(nome, email, senha, cpf, fkPerfil)
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

function alterarSenha(req, res) {
    const idPerfil = req.params.idPerfil
    const senhaNova = req.body.senhaNovaServer;
    const senhaAntiga = req.body.senhaAntigaServer;


    if (idPerfil == undefined) {
        res.status(400).send("id do usuario está undefined!");
    } else if (senhaNova == undefined) {
        res.status(400).send("Sua senha nova está undefined!");
    } else if (senhaAntiga == undefined) {
        res.status(400).send("Sua senha antiga está undefined!");
    } else {

        perfilModel.alterarSenha(idPerfil, senhaNova, senhaAntiga)
            .then(
                function (resultado) {
                    res.json({ message: "Senha alterada com sucesso" });
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

function deletar(req, res) {
    const idPerfil= req.params.idPerfil

    if (idPerfil == undefined) {
        res.status(400).send("id do usuario está undefined!");
    } else {
        perfilModel.deletar(idPerfil)
            .then(
                function (resultado) {
                    res.json({ message: "Usuário deletado com sucesso" });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao deletar usuário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    cadastrarFuncionario,
    alterarSenha,
    deletar,
    deletarFunc
}