'use strict';

const needle = require('needle');

// 1. To start, write a function named "getQuote"
//    that takes a URL and a callback function.
//    Then, it uses the "needle" module to fetch a coding
//    quote, and passes on either the error or result to the callback.
function getQuote (url, cb) {
  needle.get(url, function (err, res) {
    if (err) cb(err);
    else cb(null /* err */, res.body);
  });
}

// 2. Now, write a function named "promiseQuote"
//    that wraps "getQuote" and, using resolve/reject,
function promiseQuote (url) {
  return new Promise(function (resolve, reject) {
    getQuote(url, function (err, res) {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

//    makes it work with JS promises.
// 3. Finally, write a function named "awaitUppercaseQuote"
//    that wraps "promiseQuote" using async/await and
//    returns the content of the quote object in uppercase.
async function awaitUppercaseQuote (url) {
  const result = await promiseQuote(url);
  if (result) return result.quote.toUpperCase();
}

module.exports = {
  getQuote,
  promiseQuote,
  awaitUppercaseQuote,
};
