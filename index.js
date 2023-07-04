const inquirer = require ('inquirer');
const  {MainMenuQuestions,AddDepartmentQuestions,AddRoleQuestions,AddEmployeeQuestions,UpdateEmployeeRoleQuestions } = ('./questions.js');
const EmployeeDatabase = require('/db/EmployeeDatabase.js');


const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: 'Letmein123',
    database:'employee_db',
});

db.connoct();

const view_departments = () => {
    db.getdepartments().then((results) => {
        console.table(results);
        doMenuQuestions
    });
}

const view_roles = () => {
    db.getRoles().then((results) => {
        console.table(results);
        doMenuQuestions
    });
}

const view_employees = () => {
    db.getemployees().then((results) => {
        console.table(results);
        doMenuQuestions
    });
}




