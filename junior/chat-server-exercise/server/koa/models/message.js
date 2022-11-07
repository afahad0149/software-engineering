'use strict';

const db = require('../db');

exports.getAll = () => db.msgs;

exports.postOne = (msg) => db.msgs.push(msg);
