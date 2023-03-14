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
  
//   function to add a new department to the department table:
function addDepartment(name) {
    return connection.promise().query('INSERT INTO department SET ?', { name });
  }

//   function to add a new role to the role table:
function addRole(title, salary, department_id) {
    return connection.promise().query('INSERT INTO role SET ?', { title, salary, department_id });
  }

//   function to add a new employee to the employee table:
function addEmployee(first_name, last_name, role_id, manager_id) {
    return connection.promise().query('INSERT INTO employee SET ?', { first_name, last_name, role_id, manager_id });
  }

//   function to update an employee's role in the employee table:
function updateEmployeeRole(employee_id, role_id) {
    return connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [role_id, employee_id]);
  }

//   Export all of the functions so they can be used in other files:
module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
  };
  
