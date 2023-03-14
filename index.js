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

// function to prompt the user to choose an action:
function promptAction() {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ]
      }
    ]);
  }
  
//   function to handle the "View all departments" action:
async function viewAllDepartments() {
    const [rows] = await getAllDepartments();
    console.table(rows);
  }

//   function to handle the "View all roles" action:
async function viewAllRoles() {
    const [rows] = await getAllRoles();
    console.table(rows);
  }

//   function to handle the "View all employees" action:
async function viewAllEmployees() {
    const [rows] = await getAllEmployees();
    console.table(rows);
  }

//   function to handle the "Add a department" action:

  