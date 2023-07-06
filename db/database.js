const mysql = require("mysql2");

// class Database {
//   constructor(options) {
//     this.options = options;
//     this.db = null;
//   }
//   validate() {
//     const { host, user, password, database } = this.options;
//     if (!host || !user || !password || !database)
//       throw new Error("Configuration is invalid");

//     return;
//   }

//   connect() {
//     this.validate();

//     const { host, user, password, database } = this.options;
//     this.db = mysql.createConnection(
//       {
//         host: host,
//         user: user,
//         password: 'Memine81',
//         database: database,
//       },
//       console.log(`connecter to employee database,`)
//     );
//   }
//   disconnect() {
//     this.db.disconnect();
//   }
// }

const connection =mysql.createConnection({
  
  host: 'localhost',
         user: 'root',
         password: 'Memine81',
         database: 'employee_db',

});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
