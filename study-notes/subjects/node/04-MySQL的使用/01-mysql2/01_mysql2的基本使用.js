const mysql = require('mysql2');

// 1. 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'mysql_root'
});

// 2. 执行SQL语句
const statement = `
  SELECT * FROM products WHERE price > 6000;
`;

connection.query(statement, (err, results, fields) => {
  console.log(results);
});
