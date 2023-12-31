const inquirer = require("inquirer");
const {
  MainMenuQuestions,
  AddRoleQuestions,
  AddEmployeeQuestions,
  UpdateEmployeeRoleQuestions,
  AddDepartmentsQuestions,
} = require("./questions.js");

const EmployeeDatabase = require("./db/EmployeeDatabase.js");

const db = new EmployeeDatabase({
  host: "localhost",
  user: "root",
  password: "Memine81",
  database: "employee_db",
});



const doMenuQuestions = () => {
  inquirer.prompt(MainMenuQuestions).then((response) => {
    switch (response.options) {
      case "view_department":
        view_departments();
        break;
      case "view_roles":
        view_roles();
        break;
      case "view_employees":
        view_employees();
        break;
      case "add_department":
        add_department();
        break;
      case "add_role":
        add_role();
        break;
      case "add_employee":
        add_employee();
        break;
      case "update_role":
        update_role();
        break;
    }
  });
};

const view_departments = () => {
  db.getdepartments().then((response) => {
    console.table(response);
    doMenuQuestions();
  });
};

const view_roles = () => {
  db.getRoles().then((response) => {
    console.table(response);
    doMenuQuestions();
  });
};

const view_employees = () => {
  db.getemployees().then((response) => {
    console.table(response);
    doMenuQuestions();
  });
};

const add_department = () => {
  inquirer.prompt(AddDepartmentsQuestions).then((response) => {
    db.getdepartments(response).then((results) => {
      console.log("\n", results);
      doMenuQuestions();
    });
  });
};

const add_role = () => {
  db.getdepartments().then((results) => {
    const departmentQuestions = AddRoleQuestions[2];
    results.forEach((department) => {
      departmentQuestions.choices.push({
        value: department.id,
        name: department.name,
      });
    });

    inquirer.prompt(AddRoleQuestions).then((response) => {
      db.addRole(response).then((results) => {
        console.log("\n", results);
        doMenuQuestions();
      });
    });
  });
};

const add_employee = () => {
  db.getRoles().then((results) => {
    const roleQuestions = AddEmployeeQuestions[2];
    results.forEach((role) => {
      const role_summary = `${role.tittle} (${role.department_name}: ${role.salary})`;
      roleQuestion.choices.push({
        value: role.id,
        name: role_summary,
      });
    });
  });
};
db.getEmployee().then((results) => {
  const managerQuestion = AddEmployeeQuestions[3];
  results.forEach((employee) => {
    managerQuestion.choices.push({
      value: employee.id,
      name: employee.name,
    });
  });

  managerQuestion.choices.push({
    value: null,
    name: "none",
  });

  inquirer.prompt(AddEmployeeQuestions).then((response) => {
    db.add_employee(response).then((results) => {
      console.log("\n", results);
      doMenuQuestions();
    });
  });
});

const update_role = () => {
  db.getEmployees().then((results) => {
    const employeeQuestion = UpdateEmployeeRoleQuestions[0];
    results.forEach((employee) => {
      employeeQuestion.choicee.push({
        value: employee.id,
        name: employee,
        name: `${employee.first_name} ${employee.last_name}`,
      });
    });

    db.getRoles().then((results) => {
      const roleQuestion = UpdateEmployeeRoleQuestions[1];
      results.forEach((role) => {
        roleQuestion.choices.push({
          value: role.id,
          name: role.title,
        });
      });

      inquirer.prompt(UpdateEmployeeRoleQuestions).then((response) => {
        db.updateEmployeeRole(response).then((results) => {
          console.log("\n", results);
          doMenuQuestions();
        });
      });
    });
  });
};

function onInit() {
  console.log("Welcome to the Employee Tracker");

  // validate and open the database connection
  db.validate();

  // Load the quesions and start the main menu
  doMenuQuestions();
}

onInit();


