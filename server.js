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
// checking to see if server.js works
//console.log(firstChoice)
// ask user what they would like to do
function firstChoice() {
    inquirer.prompt({
        type: 'list',
        name: 'task',
        message: 'Please choose an option',
        choices: [
            "View Employees",
            "View Employees by Department",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Add Role",
            "Stop"
        ]
    })
    // create a switch statement that sets the options to functions
    .then(function ({ action }) {
        switch (action) {
            case 'View Employees':
                viewEmployees();
                break;
            
            case 'View Employee by Department':
                viewDepartment();
                break;

            case 'Add Employee':
                addEmployee();
                break;

            case 'Remove Employee':
                removeEmployee();
                break;
            
            case 'Update Employee Role':
                updateEmployee();
                break;

            case 'Add Role':
                addRole();
                break;
            
            case 'Stop':
                connection.end();
                break;

        }
    })
}