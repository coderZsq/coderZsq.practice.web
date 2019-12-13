var express = require('express');
var router = express.Router();
const connection = require('../db')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 连接数据库
connection.connect()

router.post('/postData', function (req, res, next) {
  // 1. 获取提交的用户名和密码
  let { username, password } = req.body

  // 2. 操控数据库, 然后获取数据库中的数据
  let sql = `select * from login where username = '${username}' and password = '${password}'`
  connection.query(sql, function (err, data) {
    if (err) {
      console.log(err)
      throw err
    } else {
      res.send(data)
    }
  })
})

// 处理获取数据列表的请求
router.get('/getlist', function (req, res, next) {
  connection.query('select * from login', function (err, data) {
    if (err) {
      throw err;
    } else {
      res.send(data)
    }
  })
})

module.exports = router;
