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

module.exports = router;