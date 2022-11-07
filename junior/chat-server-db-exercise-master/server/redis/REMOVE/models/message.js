'use strict';

const { v4: uuidv4 } = require('uuid');

const db = require('./');

const keyPrefix = 'message-';

exports.getAll = async () => {
  const keys = await db.keys(keyPrefix + '*');
  const pipeline = db.pipeline();
  keys.forEach(key => {
    pipeline.hgetall(key);
  });
  const pipeRes = await pipeline.exec();
  const messages = pipeRes.map(entry => {
    const {msg} = entry[1];
    return JSON.parse(msg);
  });
  return messages.sort((a,b) => a.timestamp - b.timestamp);
};

exports.set = msg => db.hmset(keyPrefix + uuidv4(), {
  msg: JSON.stringify(msg)
});
