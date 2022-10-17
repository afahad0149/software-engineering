'use strict';

const express = require('express');
const app = express();

const conf = require('./config.js');
const router = require('./router.js');

const PORT = 3000;

app.use(express.static(conf.clientPath));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // eslint-disable-line no-console
});
