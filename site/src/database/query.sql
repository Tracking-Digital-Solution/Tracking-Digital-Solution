-- Active: 1663943194633@@127.0.0.1@3306@trackingdigitalsolution
INSERT INTO trackingdigitalsolution.Perfil (nome, email, senha, cpf, cargo, perfilAdministrador)
VALUES ('Maria', 'maria@example.com', 'senha123', '123255678900', 'Gerente', NULL),
       ('João', 'joao@example.com', 'senha2556', '09876543210', 'Analista', 1),
       ('Pedro', 'pedro@example.com', 'senha789', '567890123255', 'Desenvolvedor', 1);
insert EnderecoMaquina values (null,"02212-010","SP","São Paulo", "Vila Medeiros", "Rua Astrapeia",120,null);
insert MaquinaCorporativa VALUES (null,"[192.168.15.1]",null,null,1,1);
select * from cpudadosestaticos;
INSERT into cpudadosestaticos values (null,75,"Ryzen 7");


select * from MaquinaCorporativa where ip = '[192.168.15.1]'; 
select * from coletacpu;

select 1 from maquinacorporativa mc 
    JOIN coletacpu cc on mc.`idMaquinaCorporativa` = cc.`idCPU`
        JOIN cpudadosestaticos ce on cc.`idCPU` = ce.`idCpuDadosEstaticos`;