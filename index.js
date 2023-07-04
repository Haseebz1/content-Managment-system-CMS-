const inquirer = require ('inquirer');
const  {MainMenuQuestions,AddDepartmentQuestions,AddRoleQuestions,AddEmployeeQuestions,UpdateEmployeeRoleQuestions } = ('./questions.js');
const EmployeeDatabase = require('./db/EmployeeDatabase');


const db = new EmployeeDatabase({
host: 'localhost',
user: 'root',
password: '',
database: 'employee_db'
});

db.coonect();
if (db.coonect()){
    console.log("connected succefully");
}else {
    console.log("not connected")
}