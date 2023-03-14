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
async function addDepartmentPrompt() {
    const { name } = await inquirer.prompt({
      type: 'input',
      name: 'name',
      message: 'What is the name of the department?'
    });
  
    await addDepartment(name);
  
    console.log(`Added ${name} department to the database.`);
  }

//   function to handle the "Add a role" action:
async function addRolePrompt() {
    const [departments] = await getAllDepartments();
  
    const { title, salary, department_id } = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the role?'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?'
      },
      {
        type: 'list',
        name: 'department_id',
        message: 'Which department does the role belong to?',
        choices: departments.map((department) => ({ name: department.name, value: department.id }))
      }
    ]);
  
    await addRole(title, salary, department_id);
  
    console.log(`Added ${title} role to the database.`);
  }

//   function to handle the "Add an employee" action:  
async function addEmployeePrompt() {
    const [roles] = await getAllRoles();
    const [employees] = await getAllEmployees();
  
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?"
      },
      {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?"
      },
      {
        type: 'list',
        name: 'role_id',
        message: "What is the employee's role?",
        choices: roles.map((role) => ({ name: role.title, value: role.id }))
      },
      {
        type: 'list',
        name: 'manager_id',
        message: "Who is the employee's manager?",
        choices: [{ name: 'None', value: null }, ...employees.map((employee) => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }))]
      }
    ]);
  
    await addEmployee(first_name, last_name, role_id, manager_id);
  
    console.log(`Added ${first_name} ${last_name} to the database.`);
  }

//   function to handle the "Update an employee role" action:
async function updateEmployeeRolePrompt() {
    const [employees] = await getAllEmployees();
    const [roles] = await getAllRoles();
  
    const { employee_id, role_id } = await inquirer.prompt([
      {
        type: 'list',
        name: 'employee_id',
        message: 'Which employee do you want to update?',
        choices: employees.map((employee) => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }))
      },
      {
        type: 'list',
        name: 'role_id',
        message: "What is the employee's new role?",
        choices: roles.map((role) => ({ name: role.title, value: role.id }))
      }
    ]);
  
    await updateEmployeeRole(employee_id, role_id);
  
    console.log('Employee role updated.');
  }
  
//   main function to start the application:
async function start() {
    console.log('Employee Database Manager\n');
  
    let action;
  
    while (action !== 'Exit') {
      ({ action } = await promptAction());
  
      switch (action) {
        case 'View all departments':
          await viewAllDepartments();
          break;
        case 'View all roles':
          await viewAllRoles();
          break;
        case 'View all employees':
          await viewAllEmployees();
          break;
        case 'Add a department':
          await addDepartmentPrompt();
          break;
        case 'Add a role':
          await addRolePrompt();
          break;
        case 'Add an employee':
          await addEmployeePrompt();
          break;
        case 'Update an employee role':
          await updateEmployeeRolePrompt();
          break;
      }
  
      console.log();
    }
  
    console.log('Goodbye!');
    process.exit();
  }

//   Call the start() function to start the application:
start();

  