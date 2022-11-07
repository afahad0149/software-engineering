'use strict';

const Router = require('koa-router');
const router = new Router();
const controller = require('./controllers/topic.controller');

router.get('/topics', controller.getAll);
router.post('/topics', controller.create);
router.delete('/topics/:id', controller.delete);
router.put('/topics/:id/up', controller.votingUp);
router.put('/topics/:id/down', controller.votingDown);

module.exports = router;