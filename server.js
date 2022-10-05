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
            "View Roles",
            "Add Employee",
            "Remove Employee",
            //"Update Employee Role",
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

            case 'View Roles':
                viewRoles();
                break;

            case 'Add Employee':
                addEmployee();
                break;


            case 'Remove Employee':
                removeEmployee();
                break;
            /*
            case 'Update Employee Role':
                updateEmployee();
                break;
                */
                

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
        // push the employee table within the array
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
        // selecting department table
        let query = 'SELECT * FROM department';
        connection.query(query, function (err, res) {
            if (err) throw err;
            // create an array with the departments
            let departmentArr = [];
            // will push the list of departments array
            res.forEach(department => departmentArr.push(department));
            console.table(departmentArr);
            firstChoice();
        });
    } catch (err) {
        console.log(err);
        firstChoice();
    };
}

function viewRoles() {
    console.log("Viewing Roles\n")

    try {
        // selecting department table
        let query = 'SELECT * FROM role';
        connection.query(query, function (err, res) {
            if (err) throw err;
            // create an array with the departments
            let roleArr = [];
            // will push the list of departments array
            res.forEach(role => roleArr.push(role));
            console.table(roleArr);
            firstChoice();
        });
    } catch (err) {
        console.log(err);
        firstChoice();
    };
}

// create add employee function
// async function to allow user to add new roles 
const addEmployee = async () => {
    try {
        console.log('Employee Add');

        let answer = await inquirer.prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'What is the first name of this Employee?'
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'What is the last name of this Employee?'
            }
        ])

        let result = await connection.query("INSERT INTO employee SET ?", {
            first_name: answer.firstName,
            last_name: answer.lastName,
        });

        console.log(`${answer.firstName} ${answer.lastName} added successfully.\n`);
        firstChoice();

    } catch (err) {
        console.log(err);
        firstChoice();
    };
}

//create add role function
const addRole = async () => {
    try {
        console.log("Adding new roles\n");

        let answer = await inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Please enter a new role'
            },

            {
                name: 'salary',
                type: 'input',
                message: 'Please enter the salary of the new role'
            },
        ]);

        let result = await connection.query("INSERT INTO role SET ?", {
            title: answer.title,
            salary: answer.salary,
        })

        console.log(`${answer.title} role added !\n`)
        firstChoice();

    } catch (err) {
        console.log(err);
        firstChoice();
    };
}



  
  