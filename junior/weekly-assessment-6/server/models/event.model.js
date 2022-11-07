'use strict';

require('dotenv').config();
const client = require('./index');

const events = client.db(process.env.DATABASE_NAME).collection('eventslist');

exports.getAll = () => events.find({}).toArray();

exports.set = msg => events.insertOne({
  title: msg.title,
  date: msg.date,
  venue: msg.title
});