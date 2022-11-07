'use strict';

const Router = require('koa-router');
const router = new Router();
const message = require('./controllers/message');

router.get('/messages', message.getMessages);
router.post('/messages', message.postMessage);

module.exports = router;
