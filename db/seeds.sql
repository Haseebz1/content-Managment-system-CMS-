 INSERT INTO department (name)
  VALUES ("Sales"),
   ("Engineering"),
   ("Finance"),
   ("Legal");
 



 INSERT INTO role (title, salary, department_id) 
 
VALUES  ('Software Engineer',3),
('Sales Lead',19000, 1),
('Lead Engineer', 20000, 2),
('Sales person',50000 ,1),
('Accountant',15000 ,4),
('Legal team', 20000,3),
(' lawyer', 1900, 4);
 

 INSERT INTO employee (first_name, last_name, role_id, manager_id) 
 VALUES ('Jasson', 'Sammon', 1, null ),
  ('Haseeb', 'Zubair', 2 , 2 ),
  ('Waqas', 'Riaz', 3 , null),
  ('John', 'Deacon', 4 , null),
  ('Burton', 'Cliff', 5 , 3),
  ('Robyn', 'Smith', 6 , 1),
  ('Jordan', 'Hindby', 7 , 2 ),
  ('Paul', 'Butterworth', 8 , 3),
  ('Abdul', 'Sulieman', 9, 6);

