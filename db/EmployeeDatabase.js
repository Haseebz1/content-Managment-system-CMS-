const Database = require('./database.js');

class EmployeeDatabase extends Database {
    constructor(options) {
        super(options);
    }

    getDepartments() {

        return new Promise(( resolve, reject) => {
            this.db.query('SELECT * FROM department' , (err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    getRoles() {

        return new Promise((resolve, reject)  => {
            this.db.query( `SELECT role.id,role.title, department.name as role_department, role.salary FROM role
            INNER JOIN department ON role.department_id = department.id;`,
            (err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }


    getEmployee() {

        return new Promise((resolve, reject) => {
            this.db.query(
                `SELECT employee.id,employee.first_name,COALESCE(employee.last_name,"") as last_name,role.title as job_title,department.name as department,role.salary as salary, CONCAT(COALESCE(managers.first_name,"")," ",COALESCE(managers.last_name,"")) as manager FROM employee
        INNER JOIN role ON employee.role_id = role.id
        INNER JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS managers ON employee.manager_id = managers.id
        ORDER BY employee.id;
        `,
                (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                });
        });
    }

    addDepartment(name) {

        return new Promise((resolve, reject) => {
            this.db.query( `INSERT INTO department(name)
            VALUE("${name}");`,
             (err, results) => {
                if(err) {
                    reject(err);
                }
                resolve(`Department ${department.department_name} added successfully`);
            });

            });
                
        }

        addRole(roleOptions) {
            const { role, salary, department } = roleOptions;
            return new Promise((resolve, reject) => {
              this.db.query(
                `INSERT INTO role(title,salary,department_id)
            VALUE("${role}",${salary},${department})`,
            (err, results) => {
                    if(err) {
                        reject(err);
                    }
                    resolve(`
                    Added ${role} to database
                    `);
                }
                );
              });
            }
            
        

        addEmployee(employee) {
            const { firstName, lastName, managerId, roleId } = employeeOptions;

            return new promise ((resolve, reject) => {
                this.db.query(   `INSERT INTO employee(first_name,last_name,role_id,manager_id)
                VALUE("${firstName}","${lastName}",${roleId},${
                      isNaN(managerId) ? "NULL" : managerId
                    })`,
                (err, results) => {
                  if(err) {
                    reject(err);
                  }  
                  resolve(`${employee.first_name} ${employee.last_name} added successfully`);
                });
            });
        }
        updateEmployeeRole(employee) {

            return new promise((resolve, reject) => {
                this.db.query(
                    `UPDATE employee
                    SET role_id = ${roleID}
                    WHERE id = ${employeeID};`,
                    function (err, results) {
                if(err) {
                    reject(err);
                }
                resolve(`
                Updated Employee
                `);
              }
            );
          });
        }
        updateEmployeeManager(employeeID, managerID) {
            return new Promise((resolve, reject) => {
              this.db.query(
                `UPDATE employee
              SET manager_id = ${managerID}
              WHERE id = ${employeeID};`,
                function (err, results) {
                  if (err) {
                    reject(err);
                  }
                  resolve(`
                Updated Manager
                `);
                }
              );
            });
          }
          getDepartmentID(departmentName) {
            return new Promise((resolve, reject) => {
              this.db.query(
                `
                SELECT * FROM department
                WHERE department.name = "${departmentName}";`,
                (err, results) => {
                  if (err) {
                    reject(err);
                  }
                  resolve(results);
                }
              );
            });
          }
          
          getEmployeeID(name) {
            return new Promise((resolve, reject) => {
              if (name === "None") resolve("None");
              const splitName = name.split(" ");
              let query = "";
              if (!splitName[1]) {
                query = "last_name is NULL";
              } else {
                query = `last_name = "${splitName[1]}"`;
              }
        
              this.db.query(
                `SELECT id FROM employee
                WHERE first_name = "${splitName[0]}" and ${query};`,
                (err, results) => {
                  if (err) {
                    reject(err);
                  }
                  resolve(results);
                }
              );
            });
          }
        
          getRoleID(roleName) {
            return new Promise((resolve, reject) => {
              this.db.query(
                `SELECT id from role
                WHERE title = "${roleName}";`,
                (err, results) => {
                  if (err) {
                    reject(err);
                  }
                  resolve(results);
                }
              );
            });
          }
        }
        

        
module.exports = EmployeeDatabase;
