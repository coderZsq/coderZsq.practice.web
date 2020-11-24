const jwt = require('jsonwebtoken');

const errorTypes = require('../constants/error-types');
const service = require('../service/user.service');
const md5password = require('../utils/password-handle');
const { PUBLIC_KEY } = require('../app/config');

const verifyLogin = async (ctx, next) => {
  console.log('验证登录的middleware');

  // 1. 获取用户名和密码
  const { name, password } = ctx.request.body;

  // 2. 判断用户名或者密码是否为空
  if (!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }

  // 3. 判断用户是否存在
  const result = await service.getUserByName(name);
  const user = result[0];
  if (!user) {
    const error = new Error(errorTypes.USER_DOSE_NOT_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }

  // 4. 判断密码是否和数据库中的密码是一致(加密)
  if (md5password(password) !== user.password) {
    const err = new Error(errorTypes.PASSWORD_IS_INCORRENT);
    return ctx.app.emit('error', err, ctx);
  }

  ctx.user = user;
  await next();
};

const verifyAuth = async (ctx, next) => {
  console.log('验证授权的middleware');
  // 1. 获取token
  console.log(ctx.headers)
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    const error = new Error(errorTypes.UNAUTHORIZATION);
    return ctx.app.emit('error', error, ctx);
  }
  const token = authorization.replace('Bearer ', '');
  console.log(token);

  // 2. 验证token(id/name/iat/exp)
  /**
    postman 中的 Test 脚本获取token , {{token}}
    const res = pm.response.json();
    pm.globals.set('token', res.token);
   */
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256']
    });
    ctx.user = result;
    await next();
  } catch (err) {
    const error = new Error(errorTypes.UNAUTHORIZATION);
    ctx.app.emit('error', error, ctx);
  }
}

module.exports = {
  verifyLogin,
  verifyAuth
};