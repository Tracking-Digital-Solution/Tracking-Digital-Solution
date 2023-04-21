CREATE SCHEMA IF NOT EXISTS trackingdigitalsolution DEFAULT CHARACTER SET utf8 ;
USE trackingdigitalsolution;

-- Table trackingdigitalsolution.Perfil
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.Perfil (
  idPerfil INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  cpf CHAR(14) NOT NULL,
  cargo VARCHAR(45) NULL,
  perfilAdministrador INT UNIQUE,
  PRIMARY KEY (idPerfil, perfilAdministrador),
  CONSTRAINT fk_Perfil_Perfil1
    FOREIGN KEY (perfilAdministrador)
    REFERENCES trackingdigitalsolution.Perfil (idPerfil));
    


-- Table trackingdigitalsolution.EnderecoMaquina
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.EnderecoMaquina (
  idEndereco INT NOT NULL AUTO_INCREMENT,
  cep CHAR(9) NOT NULL,
  estado VARCHAR(255) NOT NULL,
  cidade VARCHAR(255) NOT NULL,
  bairro VARCHAR(255) NOT NULL,
  logradouro VARCHAR(255) NOT NULL,
  numero INT NOT NULL,
  complemento VARCHAR(255) NULL,
  PRIMARY KEY (idEndereco));

-- Table trackingdigitalsolution.MaquinaCorporativa
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.MaquinaCorporativa (
  idMaquinaCorporativa INT NOT NULL AUTO_INCREMENT,
  IP VARCHAR(255) NULL,
  sistemaOperacional VARCHAR(255) NULL,
  nomeMaquina VARCHAR(255) NULL,
  fkPerfil INT NOT NULL,
  fkEndereco INT NOT NULL,
  PRIMARY KEY (idMaquinaCorporativa),
  CONSTRAINT fk_MaquinaCorporativa_Perfil1
    FOREIGN KEY (fkPerfil) REFERENCES trackingdigitalsolution.Perfil (idPerfil),
  CONSTRAINT fk_MaquinaCorporativa_EnderecoServidor1
    FOREIGN KEY (fkEndereco) REFERENCES trackingdigitalsolution.EnderecoMaquina (idEndereco));
    


-- Table trackingdigitalsolution.RamDadosEstaticos
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.RamDadosEstaticos (
  idColetaRAM INT NOT NULL AUTO_INCREMENT,
  riscoRAM INT NULL,
  total VARCHAR(45) NULL,
  PRIMARY KEY (idColetaRAM));


-- Table trackingdigitalsolution.coletaRAM
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.coletaRAM (
  idRAM INT NOT NULL AUTO_INCREMENT,
  usoAtual INT NULL,
  disponivel INT NULL,
  dataHora DATETIME NULL,
  fkMaquina INT NOT NULL,
  fkEstaticaRAM INT NOT NULL,
  PRIMARY KEY (idRAM, fkEstaticaRAM),
  CONSTRAINT fk_RAMMaquinaCorporativa_MaquinaCorporativa1
    FOREIGN KEY (fkMaquina)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa),
  CONSTRAINT fk_coletaRAM_RamMaquinaCorporativa1
    FOREIGN KEY (fkEstaticaRAM)
    REFERENCES trackingdigitalsolution.RamDadosEstaticos (idColetaRAM));
    


-- Table trackingdigitalsolution.CpuDadosEstaticos
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.CpuDadosEstaticos (
  idColetaCPU INT NOT NULL AUTO_INCREMENT,
  riscoCPU INT NULL,
  nomeProcessador VARCHAR(255) NULL,
  PRIMARY KEY (idColetaCPU));


-- Table trackingdigitalsolution.ColetaCPU
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.ColetaCPU (
  idCPU INT NOT NULL AUTO_INCREMENT,
  usoAtual DOUBLE NULL,
  dataHota DATETIME NULL,
  fkMaquina INT NOT NULL,
  fkEstaticaCPU INT NOT NULL,
  PRIMARY KEY (idCPU, fkEstaticaCPU),
  CONSTRAINT fk_CPUServidor_MaquinaCorporativa1
    FOREIGN KEY (fkMaquina)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa),
  CONSTRAINT fk_ColetaCPU_CpuMaquinaCorporativa1
    FOREIGN KEY (fkEstaticaCPU)
    REFERENCES trackingdigitalsolution.CpuDadosEstaticos (idColetaCPU));
    


-- Table trackingdigitalsolution.Logs
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.Logs (
  idLogs INT NOT NULL AUTO_INCREMENT,
  descricao VARCHAR(255) NULL,
  dtLog DATETIME NULL,
  fkMaquina INT NOT NULL,
  PRIMARY KEY (idLogs),
  CONSTRAINT fk_Logs_MaquinaCorporativa1
    FOREIGN KEY (fkMaquina)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa));
    


-- Table trackingdigitalsolution.HdDadosEstaticos
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.HdDadosEstaticos (
  idColetaHD INT NOT NULL AUTO_INCREMENT,
  riscoHD INT NULL,
  modelo VARCHAR(255) NULL,
  tamanho INT NULL,
  PRIMARY KEY (idColetaHD));


-- Table trackingdigitalsolution.ColetaHD
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.ColetaHD (
  idHD INT NOT NULL AUTO_INCREMENT,
  disponivel VARCHAR(255) NULL,
  dataHora DATETIME NULL,
  fkMaquina INT NOT NULL,
  fkEstaticaHD INT NOT NULL,
  PRIMARY KEY (idHD, fkEstaticaHD),
  CONSTRAINT fk_HD_MaquinaCorporativa1
    FOREIGN KEY (fkMaquina)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa),
  CONSTRAINT fk_ColetaHD_HdMaquinaCorporativa1
    FOREIGN KEY (fkEstaticaHD)
    REFERENCES trackingdigitalsolution.HdDadosEstaticos (idColetaHD));
    