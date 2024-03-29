'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: String,
  author: String,
  favorite: Boolean,
}, { timestamps: true },
);

module.exports =  mongoose.model('books', bookSchema);