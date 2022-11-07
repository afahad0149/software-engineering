'use strict';

const Book = require('../models/book.model')

const postBook = (req, res) => {
  
  const body = req.body

  if (!body) {
      return res.status(400).json({
        success: false,
        error: 'You must provide a book object',
      })
  }

  const book = new Book(body)

  if (!book) {
    return res.status(400).json({ success: false, error: err })
  }

  book.save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: book._id,
        message: 'New book added!',
      })
    })
    .catch(error => {
      return res.status(400).json({
          error,
          message: 'Book not added!',
      })
    })
}

const getBooks = async (req, res) => {
  await Book.find({}, (err, books) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!books.length) {
      return res
        .status(404)
        .json({ success: false, error: `Books library empty` })
    }
    return res.status(200).json({ success: true, data: books })
  }).catch(err => console.log(err))
}

module.exports = {
  postBook,
  getBooks
}
