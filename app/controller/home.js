'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async send() {
    const { ctx, app } = this;
    ctx.body = app.config;
    console.log(ctx.service);
    const result = await ctx.service.sendmsg.send();
    ctx.logger.info('主动触发，发送模板消息 结果: %j', result);
    ctx.body = result;
    ctx.set('Content-Type', 'application/json');
  }
}

module.exports = HomeController;
