/**
 * 举个例子:
 *  请求所有的用户信息: get /users
 *  请求所有的某个用户信息: get /users/:id
 *  创建某个用户信息: post /users body {username: password:}
 *  删除某个用户信息: delete /users/:id
 *  更新某个用户信息: patch /users/:id {nickname:}
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(['sq', 'kobe', 'lilei']);
});

router.get('/:id', (req, res, next) => {
  res.json(`${req.params.id}用户的信息`);
});

router.post('/', (req, res, next) => {
  res.json('create user success~');
});

module.exports = router;