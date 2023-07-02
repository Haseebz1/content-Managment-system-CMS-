const MainMenuQuestions = [
  {
    type: "list",
    name: "option",
    message: "what would you like to do?",
    choices: [
      { value: "view_departments", name: "view all departments" },
      { value: "view_roles", name: "view all roles" },
      { value: "view_employees", name: "view all employees" },
      { value: "add_department", name: "add a department" },
      { value: "add_role", name: "add a role" },
      { value: "add_employee", name: "add an employee" },
      { value: "update_role", name: "update an employee role" },
    ],
  },
];

const AddDepartmentQuestions = [
  {
    type: "input",
    name: "department_name",
    message: "Enter name of new department",
  },
];

const AddRoleQuestions = [
  {
    type: "input",
    name: "title",
    message: "Enter Title of new role",
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
    type: "input",
    name: "first_name",
    messages: "Enter the first Name of Employee",
  },
  {
    type: "input",
    name: "last_name",
    messages: "Enter the last name of employee",
  },
  {
    type: "list",
    name: "role_id",
    messages: "Select the tole for the employee",
    choices: [],
  },
  {
    type: "list",
    name: "manager_id",
    messages: "select the Employee's Manager",
    choice: [],
  },
];

const UpdateEmployeeRoleQuestions = [
  {
    type: "list",
    name: "role_id",
    messages: "Select the tole for the employee",
    choices: [],
  },
  {
    type: "list",
    name: "employee_id",
    messages: "Select the Employee to update",
    choices: [],
  },
];

module.exports = {MainMenuQuestions,AddDepartmentQuestions,AddRoleQuestions,AddEmployeeQuestions,UpdateEmployeeRoleQuestions }
