const inquirer = require('inquirer');
const= {MainMenuQuestions,AddDepartmentQuestions,AddRoleQuestions,AddEmployeeQuestions,UpdateEmployeeRoleQuestions };
const EmployeeDatabase = require('./db/EmployeeDatabase');


const db = new EmployeeDatabase({
host: 'localhost',
user: 'root',
password: '',
database: 'employee_db'
});

db.coonect();