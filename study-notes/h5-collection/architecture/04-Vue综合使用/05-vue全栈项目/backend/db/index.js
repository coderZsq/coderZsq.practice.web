// 链接数据库
const mysql = require('mysql')
// 1. 创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'vue'
})

module.exports = connection