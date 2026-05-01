CREATE DATABASE geraxtech;

USE geraxtech;

CREATE TABLE contatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  telefone VARCHAR(20),
  empresa VARCHAR(100),
  cnpj VARCHAR(18),
  mensagem TEXT,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);