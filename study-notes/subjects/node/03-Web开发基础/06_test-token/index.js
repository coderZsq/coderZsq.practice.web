const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = new Koa();
const testRouter = new Router();

/**
  生成公钥私钥
  $ openssl
  OpenSSL> genrsa -out private.key 1024
  Generating RSA private key, 1024 bit long modulus
  .......++++++
  ...++++++
  e is 65537 (0x10001)
  OpenSSL> rsa -in private.key -pubout -out public.key
  writing RSA key
 */

// 在项目中的任何一个地方的相对路径, 都是相对于process.cwd
console.log(process.cwd());
const PRIVATE_KEY = fs.readFileSync('./keys/private.key');
const PUBLIC_KEY = fs.readFileSync('./keys/public.key');

// 登录接口
testRouter.post('/test', (ctx, next) => {
  const user = { id: 110, name: 'sq' };
  const token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 10,
    algorithm: 'RS256'
  });
  ctx.body = token;
});

// 验证接口
testRouter.get('/demo', (ctx, next) => {
  const authorization = ctx.headers.authorization;
  const token = authorization.replace('Bearer ', '');
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256']
    });
    ctx.body = result;
  } catch (error) {
    console.log(error.message);
    ctx.body = 'token是无效的~';
  }
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8080, () => {
  console.log('服务器启动成功~');
});
