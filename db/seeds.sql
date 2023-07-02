 INTO department (id, name) VALUES (1, 'Sales');
 INTO department (id, name) VALUES (2, 'Engineering');
 INTO department (id, name) VALUES (3, 'Legal');
 INTO department (id, name) VALUES (4, 'Finance');


 INTO role (id, tittle, salary, department_id) VALUES (1, 'Software Engineer', 20000, 2)
 INTO role (id, tittle, salary, department_id) VALUES (2, 'Sales Lead',19000, 1)
 INTO role (id, tittle, salary, department_id) VALUES (3, 'Lead Engineer', 20000, 2)
 INTO role (id, tittle, salary, department_id) VALUES (4, 'Sales person',50000 ,1)
 INTO role (id, tittle, salary, department_id) VALUES (5, 'Accountant',15000 ,4)
 INTO role (id, tittle, salary, department_id) VALUES (6, 'Legal team', 20000,3)
 INTO role (id, tittle, salary, department_id) VALUES (7, ' lawyer', 1900, 4)


 INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'Jasson', 'Sammon', 1, null );
 INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Haseeb', 'Zubair', 2 , 2 );
 INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Waqas', 'Riaz', 3 , null);
 INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'John', 'Deacon', 4 , null);
 INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Burton', 'Cliff', 5 , 3);
 INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Robyn', 'Smith', 6 , 1);
 INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Jordan', 'Hindby', 7 , 2 );
 INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Paul', 'Butterworth', 8 , 3);
 INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (9, 'Abdul', 'Sulieman', 9, 6);



