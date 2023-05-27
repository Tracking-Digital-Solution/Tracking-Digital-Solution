CREATE SCHEMA IF NOT EXISTS banco1 ;

USE banco1;

-- Table Perfil
CREATE TABLE IF NOT EXISTS Perfil (
idPerfil INT NOT NULL,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL,
cpf CHAR(14) NOT NULL,
perfilAdministrador INT NULL,
PRIMARY KEY (idPerfil),
CONSTRAINT fk_Perfil_Perfil1
FOREIGN KEY (perfilAdministrador)
REFERENCES Perfil (idPerfil));


-- Table MaquinaCorporativa
CREATE TABLE IF NOT EXISTS MaquinaCorporativa (
idMaquinaCorporativa INT NOT NULL auto_increment,
IP VARCHAR(255) NULL,
sistemaOperacional VARCHAR(255) NULL,
nomeMaquina VARCHAR(255) NULL,
fkPerfil INT NOT NULL,
PRIMARY KEY (idMaquinaCorporativa),
CONSTRAINT fk_MaquinaCorporativa_Perfil1
FOREIGN KEY (fkPerfil) REFERENCES Perfil (idPerfil));

-- Table RamDadosEstaticos
CREATE TABLE IF NOT EXISTS RamDadosEstaticos (
idRamdadosEstaticos INT NOT NULL,
riscoRAM INT NULL,
total BIGINT NULL,
PRIMARY KEY (idRamdadosEstaticos));

-- Table coletaRAM
CREATE TABLE IF NOT EXISTS ColetaRAM (
idRAM INT NOT NULL auto_increment,
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
REFERENCES RamDadosEstaticos (idRamdadosEstaticos));

-- Table CpuDadosEstaticos
CREATE TABLE IF NOT EXISTS CpuDadosEstaticos (
idCpuDadosEstaticos INT NOT NULL,
riscoCPU INT NULL,
nomeProcessador VARCHAR(255) NULL,
PRIMARY KEY (idCpuDadosEstaticos));

-- Table ColetaCPU
CREATE TABLE ColetaCPU (
idCPU INT NOT NULL auto_increment,
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

-- Table HdDadosEstaticos
CREATE TABLE HdDadosEstaticos (
idHdDadosEstaticos INT NOT NULL,
riscoHD INT NULL,
modelo VARCHAR(255) NULL,
tamanho BIGINT NULL,
PRIMARY KEY (idHdDadosEstaticos));

-- Table ColetaHD
CREATE TABLE ColetaHD (
idHD INT NOT NULL auto_increment,
disponivel BIGINT,
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
