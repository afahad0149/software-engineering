'use strict';

const fs = require('fs');
const path = require('path');

const { env, testDb } = require('../../../config');

const db = env.NODE_ENV === 'testing' ? testDb.db : require('./db.js');

const clientPath = __dirname + '/../../../client';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'application/image/svg+xml',
};

function notFound (res) {
  res.statusCode = 404;
  res.end('The requested URL was not found on this server.');
}

function serveStatic (req, res) {
  fs.readFile(clientPath + req.url, (err, data) => {
    if (err) return notFound(res);
    const extname = path.extname(req.url).toLowerCase();
    res.writeHead(200, {'Content-type': mimeTypes[extname]});
    res.end(data);
  });
}

function saveMessage (req, res) {
  // access the db and save the incoming message
  db.msgs.push(req.body);
  res.statusCode = 201;
  res.end('Created');
}

function sendMessages (req, res) {
  // access the db and res.end all messages
  res.writeHead(200, {'Content-type': 'application/json'});
  res.end(JSON.stringify(db.msgs));
}

module.exports = function router (req, res) {
  if (req.url === '/') req.url = '/index.html';
  if (req.url === '/messages') {
    if (req.method === 'POST') saveMessage(req, res); 
    if (req.method === 'GET') sendMessages(req, res);
  } else if (req.url.includes('.')) {
    serveStatic(req, res);
  }
  else {
    notFound(res);
  }
};
