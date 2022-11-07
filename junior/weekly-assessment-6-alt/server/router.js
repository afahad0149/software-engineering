'use strict';

const express = require('express')
const BookCtrl = require('./controllers/book.controller')
const router = express.Router()

router.post('/books', BookCtrl.postBook)
router.get('/books', BookCtrl.getBooks)

module.exports = router