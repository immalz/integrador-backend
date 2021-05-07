CREATE DATABASE finance_management_db;

USE finance_management_db;

SELECT * FROM users;

CREATE TABLE users(
  id_user INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(180) NOT NULL,
  email VARCHAR(180) NOT NULL,
  password VARCHAR(80) NOT NULL,
  image VARCHAR(600),
  balance REAL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM `finance_management_db`.`users` LIMIT 1000;

UPDATE users set balance = 1230 where id_user = 1

ALTER TABLE users ADD alert REAL AFTER balance;

INSERT INTO users(username, email, password) VALUES('immalz','alzamora@gmail.com', '123456')

/*----------------------------------------------*/
/*----------------------------------------------*/

CREATE TABLE state_amount(
  id_state INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40)
);

INSERT INTO state_amount (name) VALUES ('Gasto');
INSERT INTO state_amount (name) VALUES ('Ingreso');
SELECT * FROM `finance_management_db`.`state_amount` LIMIT 1000;

/*----------------------------------------------*/
/*----------------------------------------------*/

DROP TABLE amounts;
CREATE TABLE amounts(
  id_amount INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(180) NOT NULL,
  amount REAL NOT NULL,
  id_state INT(10) REFERENCES state_amount(id_state),
  id_user INT(10) REFERENCES users(id_user),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE amounts ADD FOREIGN KEY(id_user) REFERENCES users(id_user);
ALTER TABLE amounts ADD FOREIGN KEY(id_state) REFERENCES state_amount(id_state);

SELECT * FROM `finance_management_db`.`amounts` LIMIT 1000;

INSERT INTO amounts (name, amount,id_state,id_user) values ('nuevo ingreso', 1265, 2, 10);

SELECT * FROM amounts where id_user = 10



