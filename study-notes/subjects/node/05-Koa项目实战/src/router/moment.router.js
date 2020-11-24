const Router = require('koa-router');

const momentRouter = new Router({ prefix: '/moment' });

const {
  create
} = require('../controller/moment.controller');
const {
  verifyAuth
} = require('../middleware/auth.middleware');

momentRouter.post('/', verifyAuth, create);

module.exports = momentRouter;