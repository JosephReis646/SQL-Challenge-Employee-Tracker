# Employee Database Manager

## Description
The Employee Database Manager is a command-line application that allows business owners to manage their company's employee database. It provides options to view and manage departments, roles, and employees, allowing users to organize and plan their business more efficiently.

## User Story
As a business owner, I want to be able to view and manage the departments, roles, and employees in my company so that I can organize and plan my business.
## Acceptance Criteria
Given a command-line application that accepts user input:

- When I start the application, I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.  
- When I choose to view all departments, I am presented with a formatted table showing department names and department ids.  
- When I choose to view all roles, I am presented with the job title, role id, the department that role belongs to, and the salary for that role.  
- When I choose to view all employees, I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.  
- When I choose to add a department, I am prompted to enter the name of the department and that department is added to the database.  
- When I choose to add a role, I am prompted to enter the name, salary, and department for the role and that role is added to the database.  
- When I choose to add an employee, I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.  
- When I choose to update an employee role, I am prompted to select an employee to update and their new role and this information is updated in the database.  

## Installation
1. Clone this repository to your local machine.  
2. Install the necessary packages by running npm install in your terminal.  
3. Create the database by running mysql -u root -p < db/schema.sql in your terminal.  
4. (Optional) Populate the database with sample data by running mysql -u root -p < db/seeds.sql in your terminal.  

## Usage
To start the application, run node index.js in your terminal. Follow the prompts to view and manage departments, roles, and employees in your database.

## Contributing
If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request. We welcome contributions of all kinds, including bug fixes, feature requests, and documentation improvements.

## License
This project is licensed under the MIT license. See the LICENSE file for more information.

## Github Repository
https://github.com/JosephReis646/SQL-Challenge-Employee-Tracker
## Demo Video
https://drive.google.com/file/d/1lzu8LlgH4bofhMLG__gq864iQCHHPMlL/view


