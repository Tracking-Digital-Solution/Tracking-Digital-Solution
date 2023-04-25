var database = require("../database/config")

function listar() {
    // console.log("Acessando MaquinaCorporativa modal \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM MaquinaCorporativa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarMaquina(ip, fkPerfil, cep, estado,cidade, bairro, logradouro, numero,complemento){
    // console.log("Acessando MaquinaCorporativa modal L \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cpf);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO MaquinaCorporativa(IP, fkPerfil, fkEndereco) VALUES 
        ('${ip}', ${fkPerfil}, (SELECT TOP 1 idEndereco
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
    listar,
    cadastrarEndereco,
    cadastrarMaquina
};