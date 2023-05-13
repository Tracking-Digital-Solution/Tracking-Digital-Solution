
GO
USE trackingdigitalsolution;
-- Select rows from a Table or View '[Perfil]' in schema '[dbo]'
SELECT * FROM [dbo].[ColetaCPU];
GO
-- Table Perfil
CREATE TABLE  Perfil (
idPerfil INT NOT NULL IDENTITY(1,1),
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL,
cpf CHAR(14) NOT NULL,
cargo VARCHAR(45) NULL,
perfilAdministrador INT NULL,
PRIMARY KEY (idPerfil),
CONSTRAINT fk_Perfil_Perfil1
FOREIGN KEY (perfilAdministrador)
REFERENCES Perfil (idPerfil));

-- Table EnderecoMaquina
CREATE TABLE  EnderecoMaquina (
idEndereco INT NOT NULL IDENTITY(1,1),
cep CHAR(9) NOT NULL,
estado VARCHAR(255) NOT NULL,
cidade VARCHAR(255) NOT NULL,
bairro VARCHAR(255) NOT NULL,
logradouro VARCHAR(255) NOT NULL,
numero INT NOT NULL,
complemento VARCHAR(255) NULL,
PRIMARY KEY (idEndereco));

-- Table MaquinaCorporativa
CREATE TABLE  MaquinaCorporativa (
idMaquinaCorporativa INT NOT NULL IDENTITY(1,1),
IP VARCHAR(255) NULL,
sistemaOperacional VARCHAR(255) NULL,
nomeMaquina VARCHAR(255) NULL,
fkPerfil INT NOT NULL,
fkEndereco INT NOT NULL,
PRIMARY KEY (idMaquinaCorporativa),
CONSTRAINT fk_MaquinaCorporativa_Perfil1
FOREIGN KEY (fkPerfil) REFERENCES Perfil (idPerfil),
CONSTRAINT fk_MaquinaCorporativa_EnderecoServidor1
FOREIGN KEY (fkEndereco) REFERENCES EnderecoMaquina (idEndereco));

-- Table RamDadosEstaticos
CREATE TABLE  RamDadosEstaticos (
idRamDadosEstaticos INT NOT NULL IDENTITY(1,1),
riscoRAM INT NULL,
total VARCHAR(45) NULL,
PRIMARY KEY (idRamDadosEstaticos));

-- Table coletaRAM
CREATE TABLE  coletaRAM (
idRAM INT NOT NULL IDENTITY(1,1),
usoAtual BIGINT NULL,
disponivel BIGINT NULL,
dataHora DATETIME NULL,
fkMaquina INT NOT NULL,
fkEstaticaRAM INT NOT NULL,
PRIMARY KEY (idRAM, fkEstaticaRAM),
CONSTRAINT fk_RAMMaquinaCorporativa_MaquinaCorporativa1
FOREIGN KEY (fkMaquina)
REFERENCES MaquinaCorporativa (idMaquinaCorporativa),
CONSTRAINT fk_coletaRAM_RamMaquinaCorporativa1
FOREIGN KEY (fkEstaticaRAM)
REFERENCES RamDadosEstaticos (idRamDadosEstaticos));


-- Table CpuDadosEstaticos
CREATE TABLE  CpuDadosEstaticos (
idCpuDadosEstaticos INT NOT NULL IDENTITY(1,1),
riscoCPU INT NULL,
nomeProcessador VARCHAR(255) NULL,
PRIMARY KEY (idCpuDadosEstaticos));

-- Table ColetaCPU
CREATE TABLE ColetaCPU (
idCPU INT NOT NULL IDENTITY(1,1),
usoAtual INT NULL,
dataHota DATETIME NULL,
fkMaquina INT NOT NULL,
fkEstaticaCPU INT NOT NULL,
PRIMARY KEY (idCPU, fkEstaticaCPU),
CONSTRAINT fk_CPUServidor_MaquinaCorporativa1
FOREIGN KEY (fkMaquina)
REFERENCES MaquinaCorporativa (idMaquinaCorporativa),
CONSTRAINT fk_ColetaCPU_CpuMaquinaCorporativa1
FOREIGN KEY (fkEstaticaCPU)
REFERENCES CpuDadosEstaticos (idCpuDadosEstaticos));

-- Table Logs
CREATE TABLE Logs (
idLogs INT NOT NULL IDENTITY(1,1),
descricao VARCHAR(255) NULL,
dtLog DATETIME NULL,
fkMaquina INT NOT NULL,
PRIMARY KEY (idLogs),
CONSTRAINT fk_Logs_MaquinaCorporativa1
FOREIGN KEY (fkMaquina)
REFERENCES MaquinaCorporativa (idMaquinaCorporativa));

-- Table HdDadosEstaticos
CREATE TABLE HdDadosEstaticos (
idHdDadosEstaticos INT NOT NULL IDENTITY(1,1),
riscoHD INT NULL,
modelo VARCHAR(255) NULL,
tamanho BIGINT NULL,
PRIMARY KEY (idHdDadosEstaticos));

-- Table ColetaHD
CREATE TABLE ColetaHD (
idHD INT NOT NULL IDENTITY(1,1),
disponivel BIGINT NULL,
dataHora DATETIME NULL,
fkMaquina INT NOT NULL,
fkEstaticaHD INT NOT NULL,
PRIMARY KEY (idHD, fkEstaticaHD),
CONSTRAINT fk_HD_MaquinaCorporativa1
FOREIGN KEY (fkMaquina)
REFERENCES MaquinaCorporativa (idMaquinaCorporativa),
CONSTRAINT fk_ColetaHD_HdMaquinaCorporativa1
FOREIGN KEY (fkEstaticaHD)
REFERENCES HdDadosEstaticos (idHdDadosEstaticos));