'use strict';

const Koa = require('koa');
const router = require('./router');
 
const app = new Koa();
app.use(router.routes());

app.use((ctx) => {
  ctx.status = 404;
  ctx.body = '<h1>Sorry, this URL does not exist</h1>';
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
