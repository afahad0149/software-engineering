'use strict';

const Router = require('koa-router');
const router = new Router();

const routeName = (ctx) => {
  const { name } = ctx.request.params;
  ctx.body = `<h1>Hello ${name}!</h1>`;
};

router.get('/hello/:name', routeName);

module.exports = router;
