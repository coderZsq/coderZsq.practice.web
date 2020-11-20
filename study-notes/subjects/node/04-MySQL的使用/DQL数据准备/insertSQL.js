const { stat } = require('fs');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'mysql_root',
  database: 'coderhub'
});

const statement = `INSERT INTO products SET ?;`;
const phonJson = require('./phone.json');

for (let phone of phonJson) {
  connection.query(statement, phone);
}