const mysql = require("mysql2");

class Database {
  constructor(options) {
    this.options = options;
    this.db = null;
  }
  validate() {
    const { host, user, password, database } = this.options;
    this.db = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database,
    });

      console.log(`connecter to employee database,`)
    
  }
  disconnect() {
    this.db.disconnect();
  }
}

module.exports = Database;
