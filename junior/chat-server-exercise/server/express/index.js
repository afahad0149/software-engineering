const express = require("express");
const router = require("./router");

const app = express();

app.use("/", express.static("./client"));
app.use(express.json());
app.use(router);

const PORT = 3200;

app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT} `)
);
