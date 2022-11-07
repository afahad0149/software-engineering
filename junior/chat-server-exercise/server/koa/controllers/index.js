'use strict';
const models = require('../models/message');

exports.getMessages = (ctx) => {
  try {
    const messages = models.getAll();
    ctx.body = messages;
    ctx.status = 200;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

exports.postMessage = (ctx) => {
  try {
    const newMessage = ctx.request.body;
    models.postOne(newMessage);
    ctx.body = newMessage;
    ctx.status = 201;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};
