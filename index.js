// Import the inquirer package 
const inquirer = require('inquirer');

// Import the functions from query.js:
const {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
  } = require('./db/query');

//   Import the console.table package:
const cTable = require('console.table');

  