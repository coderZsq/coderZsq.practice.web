const Koa = require('koa');
const Router = require('koa-router');
const Session = require('koa-session');

const app = new Koa();

const testRouter = new Router();

// 创建Session的配置
const session = Session({
  key: 'sessionid',
  maxAge: 10 * 1000,
  signed: true, // 是否使用加密签名
}, app);
app.keys = ['aaaa'];
app.use(session);

// 登录接口
testRouter.get('/test', (ctx, next) => {
  // name/password -> id/name
  const id = 110;
  const name = 'coderZsq';

  ctx.session.user = { id, name };

  ctx.body = 'test';
});

testRouter.get('/demo', (ctx, next) => {
  console.log(ctx.session.user);
  ctx.body = 'demo';
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

app.listen(8080, () => {
  console.log('服务器启动成功~');
});
