'use strict';

const { MongoClient } = require('mongodb');
const conf = require('../config.js');

const client = new MongoClient(conf.dbUrl);

async function connect () {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.log(err);
  }
};

connect();

module.exports = client;
