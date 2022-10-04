USE employees_db;

-- insert values into department names
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Financial");
INSERT INTO department (name)
VALUES ("Legal Team");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 160000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 4);

INESERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL);
INESERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 1, 1);
INESERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodriguez", 2, NULL);
INESERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Tupik", 2, 2);
INESERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kunal", "Singh", 3, NULL);
INESERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Malia", "Brown", 3, 3);
INESERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Lourd", 4, NULL);
INESERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Allen", 4, 4);