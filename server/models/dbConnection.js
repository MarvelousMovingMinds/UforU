const mysql = require('mysql');

const options = {
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'UFORU'
};

module.exports = mysql.createPool(process.env.CLEARDB_DATABASE_URL || options);
