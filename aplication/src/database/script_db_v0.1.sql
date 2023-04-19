-- Active: 1663943194633@@127.0.0.1@3306@trackingdigitalsolution
CREATE SCHEMA IF NOT EXISTS trackingdigitalsolution DEFAULT CHARACTER SET utf8 ;
USE trackingdigitalsolution ;
INSERT INTO trackingdigitalsolution.Perfil (nome, email, senha, cpf, cargo, perfilAdministrador)
VALUES ('Maria', 'maria@example.com', 'senha123', '12345678900', 'Gerente', NULL),
       ('João', 'joao@example.com', 'senha456', '09876543210', 'Analista', 1),
       ('Pedro', 'pedro@example.com', 'senha789', '56789012345', 'Desenvolvedor', 2);


select * from maquinacorporativa;
-- Table Perfil
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.Perfil (
  idPerfil INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NULL,
  email VARCHAR(255) NULL,
  senha VARCHAR(255) NULL,
  cpf CHAR(14) NULL,
  cargo VARCHAR(45) NULL,
  perfilAdministrador INT NULL,
  PRIMARY KEY (idPerfil),
  CONSTRAINT fk_administrador
    FOREIGN KEY (perfilAdministrador)
    REFERENCES trackingdigitalsolution.Perfil (idPerfil)
);

-- Table EnderecoMaquinaCorporativa
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.EnderecoMaquinaCorporativa (
  idEndereco INT NOT NULL AUTO_INCREMENT,
  cep CHAR(9) NOT NULL,
  estado VARCHAR(255) NOT NULL,
  cidade VARCHAR(255) NOT NULL,
  bairro VARCHAR(255) NOT NULL,
  logradouro VARCHAR(255) NOT NULL,
  numero INT NOT NULL,
  complemento VARCHAR(255) NULL,
  PRIMARY KEY (idEndereco));

-- Table MaquinaCorporativa
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.MaquinaCorporativa (
  idMaquinaCorporativa INT NOT NULL AUTO_INCREMENT,
  IP VARCHAR(255) NOT NULL,
  sistemaOperacional VARCHAR(255) NOT NULL,
  nomeMaquina VARCHAR(45) NOT NULL,
  fkPerfil INT NOT NULL,
  fkEndereco INT NOT NULL,
  PRIMARY KEY (idMaquinaCorporativa),
  CONSTRAINT fk_MaquinaCorporativa_Perfil1
    FOREIGN KEY (fkPerfil) REFERENCES trackingdigitalsolution.Perfil (idPerfil),
  CONSTRAINT fk_MaquinaCorporativa_EnderecoServidor1
    FOREIGN KEY (fkEndereco) REFERENCES trackingdigitalsolution.EnderecoMaquinaCorporativa (idEndereco));

-- Table ColetaCPU
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.ColetaCPU (
  idCPU INT NOT NULL AUTO_INCREMENT,
  usoAtual DOUBLE NOT NULL,
  dataHota DATETIME NULL,
  fkMaquinaCorporativa INT NOT NULL,
  PRIMARY KEY (idCPU),
  CONSTRAINT fk_CPUServidor_MaquinaCorporativa1
    FOREIGN KEY (fkMaquinaCorporativa)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa));

-- Table CpuMaquinaCorporativa
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.CpuMaquinaCorporativa (
  idColetaCPU INT NOT NULL AUTO_INCREMENT,
  riscoCPU INT NULL,
  tempoAtivo VARCHAR(45) NULL,
  fkCPU INT NOT NULL,
  PRIMARY KEY (idColetaCPU),
  CONSTRAINT fk_coletaCpu_CPUServidor1
    FOREIGN KEY (fkCPU)
    REFERENCES trackingdigitalsolution.ColetaCPU (idCPU));

-- Table ColetaHD
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.ColetaHD (
  idHD INT NOT NULL AUTO_INCREMENT,
  disponivel VARCHAR(45) NULL,
  dataHora DATETIME NULL,
  fkMaquinaCorporativa INT NOT NULL,
  PRIMARY KEY (idHD),
  CONSTRAINT fk_HD_MaquinaCorporativa1
    FOREIGN KEY (fkMaquinaCorporativa)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa));

-- Table HdMaquinaCorporativa
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.HdMaquinaCorporativa (
  idColetaHD INT NOT NULL AUTO_INCREMENT,
  riscoHD INT NULL,
  modelo VARCHAR(45) NULL,
  tamanho INT NULL,  
  fkHD INT NOT NULL,
  PRIMARY KEY (idColetaHD),
  CONSTRAINT fk_coletaHd_HD1
    FOREIGN KEY (fkHD)
    REFERENCES trackingdigitalsolution.ColetaHD (idHD));

-- Table coletaRAM
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.coletaRAM (
  idRAM INT NOT NULL AUTO_INCREMENT,
  usoAtual INT NOT NULL,
  disponivel INT NOT NULL,
  dataHora DATETIME NULL,
  fkMaquinaCorporativa INT NOT NULL,
  PRIMARY KEY (idRAM),
  CONSTRAINT fk_RAMMaquinaCorporativa_MaquinaCorporativa1
    FOREIGN KEY (fkMaquinaCorporativa)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa));

-- Table RamMaquinaCorporativa
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.RamMaquinaCorporativa (
  idColetaRAM INT NOT NULL AUTO_INCREMENT,
  riscoRAM INT NULL,
  total VARCHAR(45) NULL,  
  fkRAM INT NOT NULL,
  PRIMARY KEY (idColetaRAM),
  CONSTRAINT fk_coletaRam_RAMServidor1
    FOREIGN KEY (fkRAM)
    REFERENCES trackingdigitalsolution.coletaRAM (idRAM));


-- Table Logs
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.Logs (
  idLogs INT NOT NULL AUTO_INCREMENT,
  descricao VARCHAR(255) NULL,
  dtLog DATETIME NULL,
  fkMaquinaCorporativa INT NOT NULL,
  PRIMARY KEY (idLogs),
  CONSTRAINT fk_Logs_MaquinaCorporativa1
    FOREIGN KEY (fkMaquinaCorporativa)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa));


-- CRIANDO USUÁRIO Padrão
CREATE USER 'grupo10user'@'localhost' IDENTIFIED BY 'grupo10user';

-- DANDO PERMISSÕES
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP
ON sprint2.* TO 'grupo10user'@'localhost';

-- GARANTINDO AS PERMISSÕES
FLUSH PRIVILEGES;