CREATE DATABASE IF NOT EXISTS biblioteca_test;

USE biblioteca_test;

DROP TABLE IF EXISTS libros;

CREATE TABLE IF NOT EXISTS libros (
  id INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  isbn VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);
