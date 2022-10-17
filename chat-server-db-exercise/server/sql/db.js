const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});




async function selectAll () {
  const msgs = [];
  await db.each('SELECT * FROM test', function (err, row) {
    if (err) {
      console.error(err.message);
    }
    const dtime = row.dtime;
    const author = row.author;
    const message = row.msg;
    msgs.push({dtime, author, message});
  });
  return msgs;

}


console.log(selectAll());

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});