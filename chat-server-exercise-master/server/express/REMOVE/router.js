'use strict';

const router = require('express').Router();
const message = require('./controllers/message');

router.get('/messages', message.getMessages);
router.post('/messages', message.postMessage);

module.exports = router;
