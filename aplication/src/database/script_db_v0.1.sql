-- Active: 1663943194633@@127.0.0.1@3306@trackingdigitalsolution
CREATE DATABASE TrackingDigitalSolution;
USE TrackingDigitalSolution;

CREATE TABLE IF NOT EXISTS Perfil (
 idPerfil INT AUTO_INCREMENT,
 nome VARCHAR(255),
 email VARCHAR(255),
 senha VARCHAR(255),
 cpf CHAR(14),
 PRIMARY KEY (idPerfil),
 perfilAdministrador INT,
 FOREIGN KEY(perfilAdministrador)
 REFERENCES Perfil (idPerfil)
 );

CREATE TABLE Servidor (
 idServidor INT,
 tipoServidor VARCHAR(255),
 PRIMARY KEY (idServidor)
 );

CREATE TABLE HD (
idHD INT,
capacidadeHD VARCHAR(45),
velocidadeLeitura VARCHAR(45),
velocidadeEscrita VARCHAR(45),
tempoAtivacao VARCHAR(45),
mediaTempoRespostaMS DOUBLE,
 fkServidor INT,
PRIMARY KEY (idHD),
FOREIGN KEY (fkServidor)
REFERENCES Servidor (idServidor)
);

CREATE TABLE EnderecoServidor (
 idEnderecoServidor INT,
 cep CHAR(8),
 estado VARCHAR(255),
 cidade VARCHAR(255),
 bairro VARCHAR(255),
 logradouro VARCHAR(255),
 numero INT,
 complemento VARCHAR(255),
 fkServidor INT,
 PRIMARY KEY (idEnderecoServidor),
 FOREIGN KEY (fkServidor)
 REFERENCES Servidor (idServidor)
);

CREATE TABLE RAMServidor (
 idRAMServidor INT,
 totalRam INT,
 freeRAM INT,
 usedRAM INT,
 buffRAM INT,
 memoriaSwap INT,
 fkServidor INT,
 PRIMARY KEY (idRAMServidor),
 FOREIGN KEY (memoriaSwap)
 REFERENCES RAMServidor (idRAMServidor),
 FOREIGN KEY (fkServidor)
 REFERENCES Servidor (idServidor)
 );

CREATE TABLE CPUServidor (
 idCPUServidor INT,
 tasks INT,
 running INT,
 sleeping INT,
 stopped INT,
 zombie INT,
 fkServidor INT,
 PRIMARY KEY (idCPUServidor),
 FOREIGN KEY (fkServidor)
 REFERENCES Servidor (idServidor)
);

CREATE TABLE MaquinaCorporativa (
 idMaquinaCorporativa INT,
 ipv4 VARCHAR(255),
 sistemaOperacional VARCHAR(255),
 capacidadeRAM INT,
 capacidadeCPU INT,
 fkPerfil INT,
 PRIMARY KEY (idMaquinaCorporativa),
 FOREIGN KEY (fkPerfil)
 REFERENCES Perfil (idPerfil)
);

CREATE TABLE Logs (
 idLogs INT ,
 descricao VARCHAR(255) ,
 dtLog DATETIME ,
 fkServidor INT ,
 PRIMARY KEY (idLogs),
 FOREIGN KEY (fkServidor)
 REFERENCES Servidor (idServidor)
 );

CREATE TABLE gateway (
 ip VARCHAR(45),
 tipo VARCHAR(45),
 data_conecao DATE,
 fkMaquinaCorporativa INT,
 fkServidor INT,
 PRIMARY KEY ( fkMaquinaCorporativa, fkServidor),	
 FOREIGN KEY ( fkMaquinaCorporativa)
 REFERENCES MaquinaCorporativa (idMaquinaCorporativa),
 FOREIGN KEY (fkServidor)
 REFERENCES Servidor (idServidor)
 );



-- CRIANDO USUÁRIO Padrão
CREATE USER 'grupo10user'@'localhost' IDENTIFIED BY 'grupo10user';

-- DANDO PERMISSÕES
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP
ON sprint2.* TO 'grupo10user'@'localhost';

-- GARANTINDO AS PERMISSÕES
FLUSH PRIVILEGES;