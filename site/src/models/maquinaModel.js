var database = require("../database/config")

function buscarDadosFuncionario(fkPerfil) {
    // console.log("Acessando MaquinaCorporativa modal \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Perfil where perfilAdministrador = ${fkPerfil};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDadosMaquina(fkPerfil) {
    // console.log("Acessando MaquinaCorporativa modal \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM MaquinaCorporativa where fkPerfil = ${fkPerfil};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarMaquina(idFunc) {
    // console.log("Acessando MaquinaCorporativa modal \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        delete from MaquinaCorporativa where idMaquinaCorporativa = ${idFunc};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDadosTi(fkPerfil) {
    // console.log("Acessando MaquinaCorporativa modal \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM MaquinaCorporativa inner join Perfil ON perfilAdministrador = ${fkPerfil} where fkPerfil = ${fkPerfil};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarMaquina(nomeMaquina, fkPerfil, cep, estado, cidade, bairro, logradouro, numero, complemento) {
    // console.log("Acessando MaquinaCorporativa modal L \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cpf);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO MaquinaCorporativa(nomeMaquina, fkPerfil, fkEndereco) VALUES 
        ('${nomeMaquina}', ${fkPerfil}, (SELECT TOP 1 idEndereco
            FROM EnderecoMaquina WHERE 
                cep='${cep}' 
                AND estado='${estado}'
                AND cidade='${cidade}'
                AND bairro='${bairro}'
                AND logradouro='${logradouro}'
                AND numero=${numero}
                AND complemento ='${complemento}'
            ORDER BY idEndereco DESC));
    `;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarEndereco(cep, estado, cidade, bairro, logradouro, numero, complemento) {
    // console.log("Acessando MaquinaCorporativa modal L \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cpf);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO EnderecoMaquina VALUES 
        ('${cep}', '${estado}', '${cidade}', '${bairro}', '${logradouro}', ${numero}, '${complemento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarEndereco,
    cadastrarMaquina,
    buscarDadosFuncionario,
    buscarDadosTi,
    deletarMaquina,
    buscarDadosMaquina
};