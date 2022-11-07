'use strict';
const Router = require('koa-router');
const router = new Router();
const controller = require('./controllers/index');

// hello router endpoint
router.get('/hello', (ctx) => {
  ctx.body = 'Hello, router!';
  ctx.status = 200;
});

let ctx;
controller.getMessages(ctx);

// GET ALL MESSAGES
router.get('/messages', controller.getMessages);

// POST MESSAGE
router.post('/messages', controller.postMessage);

module.exports = router;
