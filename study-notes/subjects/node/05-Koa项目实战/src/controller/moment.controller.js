const { use } = require('../router/auth.router');
const momentService = require('../service/moment.service');

class MomentController {
  async create(ctx, next) {
    // 1. 获取数据(user_id, content)
    const userId = ctx.user.id;
    const content = ctx.request.body.content;


    // 2. 将数据插入到数据库
    const result = await momentService.create(userId, content);
    ctx.body = result;
  }
}

module.exports = new MomentController();