'use strict';
const { env, testDb } = require('../../../../config');

const db = env.NODE_ENV === 'testing' ? testDb.db : require('./db.js');

exports.getAll = () => db.msgs;

exports.postOne = msg => db.msgs.push(msg);
