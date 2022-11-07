'use strict';
const models = require('../models/message');

exports.getMessages = async (ctx) => {
  try {
    const db = models.open('../db.sqlite');
    const messages = await db.run('SELECT * FROM test');
    console.log(messages);
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
