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