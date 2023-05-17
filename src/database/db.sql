CREATE DATABASE IF NOT EXISTS ventas;

USE ventas;

CREATE TABLE clients(
    id TINYINT(3) NOT NULL AUTO_INCREMENT,
    RFC VARCHAR(13),
    name VARCHAR(15),
    fathers_lastname VARCHAR(20),
    mothers_lastname VARCHAR(20),
    age TINYINT(2),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
);

DESCRIBE clients;

CREATE TABLE orders(
    id TINYINT(3) NOT NULL AUTO_INCREMENT,
    quantity DECIMAL(7,2),
    id_client TINYINT,
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
);

DESCRIBE orders;

INSERT INTO clients (RFC, name, fathers_lastname, mothers_lastname, age, createdAt, updatedAt)
    VALUES("LOMF870502", "Fernando", "López", "Millán", 28, now(), now());

INSERT INTO orders (quantity, id_client, createdAt, updatedAt)
    VALUES(25.45, 1, now(), now());

SELECT * FROM clients;

SELECT * FROM orders;