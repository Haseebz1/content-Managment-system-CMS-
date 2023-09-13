const MainMenuQuestions = [
  {
    type: "list",
    name: "option",
    message: "what would you like to do?",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
    ],
  },
];

const AddDepartmentQuestions = [
  {
    type: "text",
    name: "department",
    message: "Enter name of new department",
    validate: function (input) {
      return validateAns(input, "Please enter in a department")
    }
  },
];

const AddRoleQuestions = [
  {
    type: "text",
    name: "roleName",
    message: "Enter Title of new role",
    validate: function (input) {
      return validateAns(input, "Plese Enter in a Role name");
    },
  },

  {
    type: "number",
    name: "salary",
    message: "Enter the salary of new Role (numberic nummber only)",
    validate: function (value) {
      const valid = !isNaN(parseInt(value));
      return valid || "please enter number";
    },
  },
  {
    type: "list",
    name: "department_id",
    message: "select the department for the role",
    choices: [],
  },
];

const AddEmployeeQuestions = [
  {
    type: "text",
    name: "first_name",
    messages: "Enter the first Name of Employee",
    validate: function (input) {
      return validateAns(input, "Please put in a name");
    },
  },
  {
    type: "text",
    name: "last_name",
    messages: "Enter the last name of employee",
  },
  {
    type: "text",
    name: "role_id",
    messages: "Select the tole for the employee",
    choices: [],
  },
  {
    type: "list",
    name: "manager_id",
    messages: "select the Employee's Manager",
    choice: ["None"],
  },
];

const UpdateEmployeeRoleQuestions = [
  {
    type: "list",
    name: "role_id",
    messages: "Select the role for the employee",
    choices: [],
  },
]
const updateEmployeeManagerQuestion = [
  {
    type: "list",
    name: "employee_id",
    messages: "Select the Employee to update",
    choices: [],
  },
];

module.exports = {
  MainMenuQuestions,
  AddDepartmentQuestions,
  AddRoleQuestions,
  AddEmployeeQuestions,
  UpdateEmployeeRoleQuestions,
  updateEmployeeManagerQuestion
};
