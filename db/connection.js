const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Tierrablanca',
    database: 'employee_db'
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
  });
  
  module.exports = connection;
  