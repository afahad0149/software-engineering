'use strict';

require('chai').should();
const needle = require('needle');
const http = require('../index.js');

const url = 'http://quotes.stormconsultancy.co.uk/quotes/3.json';

let response;

describe('Async exercise', () => {

  before(
    'set up the quote reference',
    done => needle.get(url, (err, res) => {
      if (err) done(err);
      else {
        response = res.body;
        done();
      }
    })
  );

  describe('getQuote', () => {

    it(
      'should get a quote and pass the error or result to its callee',
      done => http.getQuote(url, (err, body) => {
        if (err) done(err);
        else {
          try {
            body.should.eql(response);
            done();
          } catch (e) {
            done(e);
          }
        }
      })
    );

  });

  describe('promiseQuote', () => {

    it(
      'should use a regular function',
      () => http.promiseQuote.toString().split(' ')[0].should.equal('function')
    );

    it(
      'this function should return a promise',
      () => http.promiseQuote(url).should.be.a('promise')
    );

    it(
      'the promise should eventually be fulfilled with the quote content',
      async () => {
        const body = await http.promiseQuote(url);
        body.should.eql(response);
      }
    );

    it(
      'the promise should reject if there is an error',
      done => {
        http.promiseQuote()
          .then(() => done(new Error('The promise is not rejecting')))
          .catch(() => done());
      }
    );

  });

  describe('awaitUppercaseQuote', () => {

    it(
      'should use an async function',
      () => http.awaitUppercaseQuote.toString().split(' ')[0].should.equal('async')
    );

    it(
      'should eventually return the quote content',
      async () => {
        const body = await http.awaitUppercaseQuote(url);
        body.should.equal(response.quote.toUpperCase());
      }
    );

  });

});
