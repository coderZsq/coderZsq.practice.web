const mysql = require('mysql2');

// 1. 创建连接池
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'mysql_root',
  connectionLimit: 10
});

// 2. 使用连接池
const statement = `
  SELECT * FROM products WHERE price > ? AND score > ?;
`;

connections.execute(statement, [6000, 7], (err, results) => {
  console.log(results);
});