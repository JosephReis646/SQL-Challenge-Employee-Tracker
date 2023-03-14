// Import the connection.js to query.js 
const connection = require('./connection');

// function to retrieve all departments from the department table:
function getAllDepartments() {
    return connection.promise().query('SELECT * FROM department');
  }
  
