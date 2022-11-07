const db = require('../db.js');

async function getAllMoves () {
  const data = await db;
  return data.moves;
  
}

async function getMoveById (id) {
  const data = await db;
  return data.moves.find(move => {
    return move.id == id;
  });
}

module.exports = { getAllMoves, getMoveById };
