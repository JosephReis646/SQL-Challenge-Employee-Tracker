DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(10, 2),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE CASCADE
);

INSERT INTO department (name) VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Lead', 100000.00, 1),
  ('Salesperson', 80000.00, 1),
  ('Lead Engineer', 150000.00, 2),
  ('Software Engineer', 120000.00, 2),
  ('Accountant', 125000.00, 3),
  ('Legal Team Lead', 250000.00, 4),
  ('Lawyer', 190000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Mike', 'Smith', 2, 1),
  ('Sara', 'Johnson', 3, NULL),
  ('David', 'Lee', 4, 3),
  ('Jane', 'Doe', 5, 3),
  ('Peter', 'Davis', 6, 4),
  ('Mary', 'Johnson', 7, 4);