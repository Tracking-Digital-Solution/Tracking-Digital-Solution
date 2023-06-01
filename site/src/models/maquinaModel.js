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
    SELECT * FROM [dbo].[MaquinaCorporativa] as m
    left join [dbo].[ColetaCPU] as cp on cp.fkMaquina = ${fkPerfil} where m.fkPerfil = ${fkPerfil};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDadosDinamicos(id) {
    // console.log("Acessando MaquinaCorporativa modal \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select top(6) m.idMaquinaCorporativa, m.nomeMaquina, m.sistemaOperacional, 
    cp.usoAtual as usoCPU, cp.dataHota,
    hd.disponivel as disponivelHD, 
    rm.usoAtual usoRAM, rm.disponivel as disponivelRAM
    from [dbo].[MaquinaCorporativa] as m 
    join [dbo].[ColetaCPU] as cp on cp.fkMaquina = m.idMaquinaCorporativa
    join [dbo].[ColetaHD] as hd on hd.fkMaquina = m.idMaquinaCorporativa 
    join [dbo].[coletaRAM] as rm on rm.fkMaquina = m.idMaquinaCorporativa where m.idMaquinaCorporativa = ${id};  
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarMaquina(id) {
    // console.log("Acessando MaquinaCorporativa modal \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        delete from MaquinaCorporativa where idMaquinaCorporativa = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDadosTi(ID, IDADM) {
    // console.log("Acessando MaquinaCorporativa modal \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM MaquinaCorporativa as m inner join Perfil as p ON m.fkPerfil = ${IDADM} where p.idPerfil = ${ID};
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

function alterarParametroCPU(parametroCPU, idPerfilAdmin) {
    var instrucao = `
    UPDATE CpuDadosEstaticos SET riscoCPU = ${parametroCPU} where idCpuDadosEstaticos in(Select idCpuDadosEstaticos from MaquinaCorporativa mc
            JOIN ColetaCPU cc on mc.idMaquinaCorporativa = cc.idCPU
            JOIN CpuDadosEstaticos ce on cc.idCPU = ce.idCpuDadosEstaticos
            JOIN Perfil p on p.perfilAdministrador = mc.fkPerfil
            where perfilAdministrador = ${idPerfilAdmin})`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterarParametroRAM(parametroRAM, idPerfilAdmin) {
    var instrucao = `
    UPDATE RamDadosEstaticos SET riscoRAM = ${parametroRAM} where idRamdadosEstaticos in(Select idRamdadosEstaticos from MaquinaCorporativa mc
            JOIN coletaRAM cc on mc.idMaquinaCorporativa = cc.idRAM
            JOIN RamDadosEstaticos ce on cc.idRAM = ce.idRamdadosEstaticos
            JOIN Perfil p on p.perfilAdministrador = mc.fkPerfil
            where perfilAdministrador = ${idPerfilAdmin})`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterarParametroDisco(parametroDisco, idPerfilAdmin) {
    var instrucao = `
    UPDATE HdDadosEstaticos SET riscoHD = ${parametroDisco} where idHdDadosEstaticos in(Select idHdDadosEstaticos from MaquinaCorporativa mc
            JOIN coletaHD cc on mc.idMaquinaCorporativa = cc.idHD
            JOIN HdDadosEstaticos ce on cc.idHD = ce.idHdDadosEstaticos
            JOIN Perfil p on p.perfilAdministrador = mc.fkPerfil
            where perfilAdministrador = ${idPerfilAdmin})`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarEndereco,
    cadastrarMaquina,
    buscarDadosFuncionario,
    buscarDadosTi,
    deletarMaquina,
    buscarDadosMaquina,
    buscarDadosDinamicos,
    alterarParametroCPU,
    alterarParametroRAM,
    alterarParametroDisco
};