'use strict';
const pool = require('./index');


exports.getAll = async () => {
  const res = await pool.query('SELECT * FROM messages');
  return res.rows;
};

exports.set = msg => {
  const sql = 'INSERT INTO messages ("authorId", content, timestamp) VALUES ($1, $2, $3)';
  const values = [msg.authorId, msg.content, Date.now()];
  return pool.query(sql, values);
};
