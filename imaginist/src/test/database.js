const mysql = require('mysql2');

const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'imaginist',
  user: 'root',
  password: 'root',
});

connections.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log('连接失败: ', err);
    } else {
      console.log('数据库连接成功~');
    }
  });
});

module.exports = connections.promise();
