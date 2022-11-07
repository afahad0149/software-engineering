'use strict';
// server
const Koa = require('koa');
const app = new Koa();
const PORT = 3000;
// router
const bodyParser = require('koa-bodyparser');
const router = require('./router');
// serving static files
const serve = require('koa-static');
const conf = require('./config');

app.use(serve(conf.clientPath));
app.use(bodyParser());
app.use(router.routes());
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
