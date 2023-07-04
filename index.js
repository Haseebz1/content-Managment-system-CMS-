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

const add_department = () => {
    inquirer
    .prompt(AddDepartmentsQuestions)
    .then((response) => {
        db.getdepartments(response).then((results) => {
            console.log('\n', results, );
            doMenuQuestions();
        });

    })
   
} 

const add_role = () => {
  db.getdepartments().then((results) => {
    const departmentQuestions = AddRoleQuestions[2];
    results.forEach((department) => {
        departmentQuestions.choices.push({
            value: department.id,
            name: department.name,
        });
    });

    inquirer 
    .prompt(AddRoleQuestions)
    .then((response) => {
        db.addRole(response).then((results) => {
            console.log('\n', results);
            doMenuQuestions
        });
    });
  });
}


const add_employee = () => {

    db.getRoles().then((results) => {

        const roleQuestions = AddEmployeeQuestions[2];
        results.forEach((role) => {
            const role_summary = `${role.tittle} (${role.department_name}: ${role.sa;ary})`;
            roleQuestion.choices.push({
                value: role.id,
                name: role_summary
            });   
        });
    
    })



    }

