const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'felipe',
  password: 'Prados89!',
  database: 'aula_MVC',
});

module.exports = connection;