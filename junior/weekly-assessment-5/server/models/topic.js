'use strict';

const mongoose = require('./');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: String,
  published_at: String,
  score: Number
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;