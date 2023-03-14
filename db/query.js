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
  
