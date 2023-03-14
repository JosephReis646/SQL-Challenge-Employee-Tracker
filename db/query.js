// Import the connection.js to query.js 
const connection = require('./connection');

// function to retrieve all departments from the department table:
function getAllDepartments() {
    return connection.promise().query('SELECT * FROM department');
  }
//   function to retrieve all roles from the role table, including the department each role belongs to:
function getAllRoles() {
    return connection.promise().query(`
      SELECT role.id, role.title, role.salary, department.name AS department
      FROM role
      INNER JOIN department ON role.department_id = department.id
    `);
  }
  
//   function to retrieve all employees from the employee table, including their role, department, and manager:
function getAllEmployees() {
    return connection.promise().query(`
      SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employee
      INNER JOIN role ON employee.role_id = role.id
      INNER JOIN department ON role.department_id = department.id
      LEFT JOIN employee AS manager ON employee.manager_id = manager.id
    `);
  }
  