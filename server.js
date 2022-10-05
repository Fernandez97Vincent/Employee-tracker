const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");



//mysql connection
const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,


    user: 'root',

    // Your password
    password: 'hotpocket',
    database: 'employees_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    firstChoice();
});

// checking to see if server.js works
//console.log(firstChoice)
// ask user what they would like to do

function firstChoice() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Please choose an option',
        choices: [
            "View Employees",
            "View Departments",
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
            
            case 'View Departments':
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
    });
}

//create a view employee function
function viewEmployees() {
    console.log("Viewing employees\n");
  
    try {
        // select from employee table
    let query = 'SELECT * FROM employee';
    connection.query(query, function (err, res) {
        if (err) throw err;
        let employeeArr = [];
        res.forEach(employee => employeeArr.push(employee));
        console.table(employeeArr);
        firstChoice();
    });
} catch (err) {
    console.log(err);
    firstChoice();
    };
}

function viewDepartment() {
    console.log("Viewing Departments\n")

    try {
        let query = 'SELECT * FROM department';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let departmentArr = [];
            res.forEach(department => departmentArr.push(department));
            console.table(departmentArr);
            firstChoice();
        });
    } catch (err) {
        console.log(err);
        firstChoice();
    };
}

  
  