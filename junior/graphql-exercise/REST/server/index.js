const Express = require('express');
const cors = require('cors');
const app = Express();
const router = require('./router');
const { PORT } = require('./config');

app.use(cors());
app.use(Express.json());
app.use(router);



app.listen(3030, () => console.log(`Listening on port ${PORT}!`));
