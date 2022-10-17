'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const { env, testDb } = require('../../config');

env.NODE_ENV = 'testing';

// Start node server
require('../node/REMOVE/index.js');

const expect = chai.expect;
chai.use(chaiHttp);

const HTML = fs.readFileSync('./client/index.html', 'utf-8');

const baseURL = 'http://localhost:3000';

const testMessage1 = {
  content: 'This is a mock message',
  authorId: true,
  timestamp: 1657187909428
};

// REMOVE-START
const testMessage2 = {
  content: 'This is another mock message',
  authorId: true,
  timestamp: Date.now()
};
// REMOVE-END

describe('Node server', () => {

  beforeEach(() => {
    testDb.db.msgs = [testMessage1];
  });

  it('GET / responds index.html, status 200', done => {
    chai
      .request(baseURL)
      .get('/')
      .end((_, res) => {
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', new RegExp('text/html'));
        expect(res.text).equal(HTML);
        done();
      });
  });

  it('POST /messages responds with status 201', done => {
    // Write your test here
    
    // REMOVE-START
    chai
      .request(baseURL)
      .post('/messages')
      .send(testMessage2)
      .end((_, res) => {
        expect(res).to.have.status(201);
        done();
      });
    // REMOVE-END

  });

  it('GET /messages responds posted message, status 200', done => {
    // Write your test here
    
    // REMOVE-START
    chai
      .request(baseURL)
      .get('/messages')
      .end((_, res) => {
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', new RegExp('application/json'));
        const messages = res.body;
        expect(JSON.stringify(messages[messages.length - 1])).equal(JSON.stringify(testMessage1));
        // ^ because data can persist we can’t assume empty msgs array before tests
        done();
      });
    // REMOVE-END
    
  });

});
