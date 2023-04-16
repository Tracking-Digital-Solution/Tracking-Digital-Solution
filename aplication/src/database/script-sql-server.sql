CREATE SCHEMA IF NOT EXISTS trackingdigitalsolution DEFAULT CHARACTER SET utf8 ;
USE trackingdigitalsolution ;

-- Table Perfil
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.Perfil (
  idPerfil INT NOT NULL IDENTITY(1,1),
  nome VARCHAR(255) NULL,
  email VARCHAR(255) NULL,
  senha VARCHAR(255) NULL,
  cpf CHAR(11) NULL,
  cargo VARCHAR(45) NULL,
  perfilAdministrador INT NOT NULL,
  PRIMARY KEY (idPerfil, perfilAdministrador),
  CONSTRAINT fk_administrador
    FOREIGN KEY (perfilAdministrador)
    REFERENCES trackingdigitalsolution.Perfil (idPerfil)
);

-- Table EnderecoMaquinaCorporativa
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.EnderecoMaquinaCorporativa (
  idEndereco INT NOT NULL IDENTITY(1,1),
  cep CHAR(8) NOT NULL,
  estado VARCHAR(255) NOT NULL,
  cidade VARCHAR(255) NOT NULL,
  bairro VARCHAR(255) NOT NULL,
  logradouro VARCHAR(255) NOT NULL,
  numero INT NOT NULL,
  complemento VARCHAR(255) NULL,
  PRIMARY KEY (idEndereco));

-- Table MaquinaCorporativa
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.MaquinaCorporativa (
  idMaquinaCorporativa INT NOT NULL IDENTITY(1,1), 
  IP VARCHAR(255) NULL,
  sistemaOperacional VARCHAR(255) NOT NULL,
  fkPerfil INT NOT NULL,
  fkEndereco INT NOT NULL,
  nomeMaquina VARCHAR(45) NULL,
  PRIMARY KEY (idMaquinaCorporativa),
  CONSTRAINT fk_MaquinaCorporativa_Perfil1
    FOREIGN KEY (fkPerfil) REFERENCES trackingdigitalsolution.Perfil (idPerfil),
  CONSTRAINT fk_MaquinaCorporativa_EnderecoServidor1
    FOREIGN KEY (fkEndereco) REFERENCES trackingdigitalsolution.EnderecoMaquinaCorporativa (idEndereco));

-- Table ColetaCPU
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.ColetaCPU (
  idCPU INT NOT NULL IDENTITY(1,1),
  usoAtual DOUBLE NOT NULL,
  fkMaquinaCorporativa INT NOT NULL,
  dataHota DATETIME NULL,
  PRIMARY KEY (idCPU),
  CONSTRAINT fk_CPUServidor_MaquinaCorporativa1
    FOREIGN KEY (fkMaquinaCorporativa)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa));

-- Table CpuMaquinaCorporativa
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.CpuMaquinaCorporativa (
  idColetaCPU INT NOT NULL IDENTITY(1,1),
  riscoCPU INT NULL,
  fkCPU INT NOT NULL,
  identificador VARCHAR(45) NULL,
  PRIMARY KEY (idColetaCPU),
  CONSTRAINT fk_coletaCpu_CPUServidor1
    FOREIGN KEY (fkCPU)
    REFERENCES trackingdigitalsolution.ColetaCPU (idCPU));

-- Table ColetaHD
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.ColetaHD (
  idHD INT NOT NULL IDENTITY(1,1),
  disponivel VARCHAR(45) NULL,
  fkMaquinaCorporativa INT NOT NULL,
  dataHora DATETIME NULL,
  PRIMARY KEY (idHD),
  CONSTRAINT fk_HD_MaquinaCorporativa1
    FOREIGN KEY (fkMaquinaCorporativa)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa));

-- Table HdMaquinaCorporativa
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.HdMaquinaCorporativa (
  idColetaHD INT NOT NULL IDENTITY(1,1),
  riscoHD INT NULL,
  fkHD INT NOT NULL,
  modelo VARCHAR(45) NULL,
  tamanho INT NULL,
  PRIMARY KEY (idColetaHD),
  INDEX fk_coletaHd_HD1_idx (fkHD ASC) VISIBLE,
  CONSTRAINT fk_coletaHd_HD1
    FOREIGN KEY (fkHD)
    REFERENCES trackingdigitalsolution.ColetaHD (idHD));

-- Table coletaRAM
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.coletaRAM (
  idRAM INT NOT NULL IDENTITY(1,1),
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
  idColetaRAM INT NOT NULL IDENTITY(1,1),
  riscoRAM INT NULL,
  fkRAM INT NOT NULL,
  total VARCHAR(45) NULL,
  PRIMARY KEY (idColetaRAM),
  CONSTRAINT fk_coletaRam_RAMServidor1
    FOREIGN KEY (fkRAM)
    REFERENCES trackingdigitalsolution.coletaRAM (idRAM));


-- Table Logs
CREATE TABLE IF NOT EXISTS trackingdigitalsolution.Logs (
  idLogs INT NOT NULL IDENTITY(1,1),
  descricao VARCHAR(255) NULL,
  dtLog DATETIME NULL,
  fkMaquinaCorporativa INT NOT NULL,
  PRIMARY KEY (idLogs),
  CONSTRAINT fk_Logs_MaquinaCorporativa1
    FOREIGN KEY (fkMaquinaCorporativa)
    REFERENCES trackingdigitalsolution.MaquinaCorporativa (idMaquinaCorporativa));