CREATE DATABASE mercadinho;
USE mercadinho;

CREATE TABLE produto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    preco DOUBLE
);

CREATE TABLE cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO produto (nome, preco) VALUES
("Coca-Cola", 8.50),
("Pepsi", 7.90),
("Trakinas", 3.99),
("Arroz Tio João", 21.99),
("Feijão Carioca", 6.50);

INSERT INTO cliente (nome, email) VALUES
("João Silva", "joao@gmail.com"),
("Maria Oliveira", "maria@gmail.com"),
("Lucas Santos", "lucas@gmail.com"),
("Ana Clara", "ana@gmail.com"),
("Pedro Costa", "pedro@gmail.com");