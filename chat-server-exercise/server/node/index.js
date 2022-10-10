// With the body parser as a middleware:

// 'use strict';

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// // url == / ==> /index.html

// // get request to get all the messages /messages endpoint
// // post request to create a messages  /messages endpoint

// const db = {msgs:[]};

// function bodyParser (req, res, next) {
//   if (req.method === 'POST') {
//     const body = [];
//     req
//       .on('data', chunk => body.push(chunk))
//       .on('end', () => {
//         req.body = JSON.parse(Buffer.concat(body).toString());
//         next(req, res);
//       });
//   } else next(req, res);
// } 

// function logger (req, res, time) {
//   const methodColor = (req.method == 'GET') 
//     ? '\x1b[32m' 
//     : (req.method == 'POST') 
//       ? '\x1b[33m'
//       : '\x1b[31m';
//   const statusColor = (res.statusCode < 300) 
//     ? '\x1b[32m' 
//     : (res.statusCode < 500) 
//       ? '\x1b[33m' 
//       : '\x1b[31m';
//   console.log(`${methodColor}${req.method}\x1b[0m ${req.url} ${statusColor}${res.statusCode}\x1b[0m -- ${(time).toFixed(4)} ms`);
// }

// function router (req,res) {
//   const start = performance.now();
//   if (req.url === '/') req.url = '/index.html';
//   // file.ext, html, js', css, png
//   if (req.url.includes('.')) {
//     fs.readFile(__dirname +'/../../client' + req.url, (err,data) => {
//       if (err) console.log('Error in the fs function :',err);
//       const extname = path.extname(req.url).toLocaleLowerCase(); //style.css => .css, javascript.js =>  .js, index.html => .html
//       const mimeTypes = {
//         '.html': 'text/html',
//         '.js': 'text/javascript',
//         '.css': 'text/css',
//       };
//       res.writeHead(200, {'Content-Type': mimeTypes[extname]});
//       res.end(data);
//     });
//   } else if (req.url === '/messages') {
//     // GET
//     if (req.method === 'GET') {
//       res.writeHead(200, {'Content-Type': 'application/json'});
//       res.end(JSON.stringify(db.msgs));
//     }
//     // POST
//     if (req.method === 'POST') {
//       db.msgs.push(req.body);
//       res.writeHead(201, {'Content-Type': 'application/json'});
//       res.end(JSON.stringify(req.body));
//     }}
//   const end = performance.now();
//   logger(req,res, end-start);
// }

// const server = http.createServer((req,res) => bodyParser(req,res,router));

// const HOST = 'localhost';
// const PORT = '5000';

// server.listen(PORT, HOST, () => {
//   console.log(`server listening on http://${HOST}:${PORT}`);
// });
// (edited)


// With the body parser built-in to the router:

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

// url == /

// get request to get all the messages /messages endpoint
// post request to create a messages  /messages endpoint

const db = {msgs:[]};

function logger (req, res, time) {
  const methodColor = (req.method == 'GET') 
    ? '\x1b[32m' 
    : (req.method == 'POST') 
      ? '\x1b[33m'
      : '\x1b[31m';
  const statusColor = (res.statusCode < 300) 
    ? '\x1b[32m' 
    : (res.statusCode < 500) 
      ? '\x1b[33m' 
      : '\x1b[31m';
  console.log(`${methodColor}${req.method}\x1b[0m ${req.url} ${statusColor}${res.statusCode}\x1b[0m -- ${(time).toFixed(4)} ms`);
}

const server = http.createServer((req,res) => {
  const start = performance.now();
  if (req.url === '/') req.url = '/index.html';
  // file.ext, html, js', css, png
  if (req.url.includes('.')) {
    fs.readFile(__dirname +'/../../client' + req.url, (err,data) => {
      if (err) console.log('Error in the fs function :',err);
      const extname = path.extname(req.url).toLocaleLowerCase(); //style.css => .css, javascript.js =>  .js, index.html => .html
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
      res.writeHead(200, {'Content-Type': mimeTypes[extname]});
      res.end(data);
    });
  } else if (req.url === '/messages') {
    // GET
    if (req.method === 'GET') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(db.msgs));
    }
    // POST
    if (req.method === 'POST') {

      // BodyParser -- middleware
      let body = [];
      req
        .on('data', chunk => body.push(chunk))
        .on('end', () => {
          body = JSON.parse(Buffer.concat(body).toString());
          console.log(body);
          db.msgs.push(body);
          res.writeHead(201, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(body));
        });
    }
  }
  const end = performance.now();
  logger(req,res, end-start);
});

const HOST = 'localhost';
const PORT = '5000';

server.listen(PORT, HOST, () => {
  console.log(`server listening on http://${HOST}:${PORT}`);
});