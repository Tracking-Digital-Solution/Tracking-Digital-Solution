-- PERFIL
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'Maria', 'maria@example.com', 'senha123', '123255678900  ', NULL);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'DOUGLAS ROSTICHELLI ALVES', 'Douglas.rodrigues@kibon.com', 'muitoFoco1@', '446.174.058-67', NULL);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'teste teste', 'teste@teste.com', 'Teste123*', '000.000.000-00', NULL);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'Paola Alves', 'Paola.rodrigues@kibon.com', 'Paola10@', '446.174.058-79', 1);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'Santos parana', 'Santos.rodrigues@kibon.com', 'Santos1234@', '446.174.058-79', 1);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'agora vai', 'agora.rodrigues@kibon.comss', 'Agoravai1@', '580.728.078-02', NULL);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'DOUGLAS ROSTICHELLI ALVES', 'leskalves.douglas@gmail.com', 'Agoravai1@', '222.222.222-90', 10);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'Leonardo Marque', 'Leo@sptech.schoolss', 'Gabsaopaulol123*', '123.456.789-00', NULL);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'Leonardo Marques', 'leo@sptech.schoolss', '#Gfgrupo10', '123.456.789-00', NULL);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'Funcionario TI', 'funcionario@ti.com', 'Funcionario123*', '123.123.123-66', 13);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'Douglas Rostichelli Alves', 'DouglasKibon@gmail.comss', 'TudoJunto10@', '446.174.058-79', NULL);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'willian Paternezi', 'willian.paternezi@sptech.schoolss', 'Teste123*', '000.000.000-00', NULL);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'Gabriel Macedo', 'gabsmvb@gmail.comss', 'Gabsaopaulol123*', '123.456.789-00', NULL);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'Douglas ti', 'DouglasTi@gmail.com', 'Agoravai1@', '222.222.222-90', 15);
INSERT INTO Perfil
( nome, email, senha, cpf, perfilAdministrador)
VALUES( 'teste teste', 'Douglas@gmail.comss', 'Douglas1@', '376.796.496-19', NULL);


-- Maquina endereço
INSERT INTO EnderecoMaquina
(cep, estado, cidade, bairro, logradouro, numero, complemento)
VALUES('09561-020', 'sao paulo', 'são caetano do sul', 'Olimpico', 'rua.', 0, '....');
INSERT INTO EnderecoMaquina
(cep, estado, cidade, bairro, logradouro, numero, complemento)
VALUES('02415-848', 'SAO BENDO', 'SAO CARLOS', 'VILA MARIA', 'RUA ARLINDO CRUZ', 123, 'CASA');
INSERT INTO EnderecoMaquina
(cep, estado, cidade, bairro, logradouro, numero, complemento)
VALUES('09340-020', 'São Paulo', 'Mauá', 'Jd.Mauá', 'Rua jandira pedro coppini', 182, 'casa');
INSERT INTO EnderecoMaquina
(cep, estado, cidade, bairro, logradouro, numero, complemento)
VALUES('09340-025', 'São Paulo', 'Mauá', 'Jd.Mauá', 'Rua jandira pedro coppini', 182, 'casa');
INSERT INTO EnderecoMaquina
(cep, estado, cidade, bairro, logradouro, numero, complemento)
VALUES('09340-020', 'São Paulo', 'Mauá', 'Jd.Mauá', 'Rua jandira pedro coppini', 182, 'casa');
INSERT INTO EnderecoMaquina
(cep, estado, cidade, bairro, logradouro, numero, complemento)
VALUES('09340-020', 'São Paulo', 'Mauá', 'Jd.Mauá', 'Rua jandira pedro coppini', 182, 'casa');
INSERT INTO EnderecoMaquina
(cep, estado, cidade, bairro, logradouro, numero, complemento)
VALUES('09340-020', 'São Paulo', 'Mauá', 'Jd.Mauá', 'Rua jandira pedro coppini', 182, 'casa');
INSERT INTO EnderecoMaquina
(cep, estado, cidade, bairro, logradouro, numero, complemento)
VALUES('09340-020', 'São Paulo', 'Mauá', 'Jd.Mauá', 'Rua jandira pedro coppini', 999, 'casa');
INSERT INTO EnderecoMaquina
(cep, estado, cidade, bairro, logradouro, numero, complemento)
VALUES('09340-020', 'São Paulo', 'Mauá', 'Jd.Mauá', 'Rua jandira pedro coppini', 999, 'casa');
INSERT INTO EnderecoMaquina
(cep, estado, cidade, bairro, logradouro, numero, complemento)
VALUES('09340-020', 'São Paulo', 'Mauá', 'Jd.Mauá', 'Rua jandira pedro coppini', 999, 'casa');


-- MINHA MAQUINA // ADCIONAR A SUA MAQUINA AQUI
INSERT INTO MaquinaCorporativa
(IP, sistemaOperacional, nomeMaquina, fkPerfil, fkEndereco)
VALUES('[8.8.8.8, 8.8.4.4]', 'Windows', 'ULTRON', 13, 2);


-- IMPORTAR TODOS OS DADOS ESTATIVOS EXISTENTES
INSERT INTO CpuDadosEstaticos
(riscoCPU, nomeProcessador)
VALUES( 75, '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz');
INSERT INTO CpuDadosEstaticos
(riscoCPU, nomeProcessador)
VALUES( 75, '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz');
INSERT INTO CpuDadosEstaticos
(riscoCPU, nomeProcessador)
VALUES( 75, '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz');


INSERT INTO RamDadosEstaticos
( riscoRAM, total)
VALUES( 80, '8259358720');
INSERT INTO RamDadosEstaticos
( riscoRAM, total)
VALUES( 80, '8299839488');
INSERT INTO RamDadosEstaticos
( riscoRAM, total)
VALUES( 80, '8358518784');


INSERT INTO HdDadosEstaticos
( riscoHD, modelo, tamanho)
VALUES( 30, 'Micron 2450 NVMe 256GB (Standard disk drives)', 256052966400);
INSERT INTO HdDadosEstaticos
( riscoHD, modelo, tamanho)
VALUES( 30, 'SAMSUNG MZVLQ256HAJD-000 (Unidades de disco padrão)', 256052966400);
INSERT INTO HdDadosEstaticos
( riscoHD, modelo, tamanho)
VALUES( 30, 'NVMe IM2P33F8ABR1-256GB (Unidades de disco padrão)', 256052966400);
