'use strict';

const client = require('./index');
const conf = require('../config');

const messages = client.db(conf.dbName).collection('messages');

exports.getAll = () => messages.find({}).toArray();

exports.set = msg => messages.insertOne({
  authorId: msg.authorId,
  content: msg.content,
  timestamp: Date.now()
});
