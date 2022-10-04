const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");


//mysql connection
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,


    user: 'root',

    // Your password
    password: 'hotpocket',
    database: 'employees_db'
});