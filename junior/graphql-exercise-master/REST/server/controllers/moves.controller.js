const Move = require('../models/Move');

async function getAllMoves (req, res) {
  try {
    const move = await Move.getAllMoves(req.params.id);
    res.json(move);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getMoveById (req, res) {
  try {
    const move = await Move.getMoveById(req.params.id);
    res.json(move);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}


module.exports = { getAllMoves, getMoveById };
