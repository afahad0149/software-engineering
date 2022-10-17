'use strict';

const models = require('../models/message');

exports.getMessages = ctx => {
  try {
    ctx.body = models.getAll();
    ctx.status = 200;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

exports.postMessage = ctx => {
  try {
    models.postOne(ctx.request.body);
    ctx.status = 201;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};
