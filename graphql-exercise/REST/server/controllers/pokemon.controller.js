const Pokemon = require('../models/Pokemon');


async function getAllPokemon (req, res) {
  try {
    const pokemon = await Pokemon.getAllPokemon();
    if (req.query && req.query.limit) {
      res.json(pokemon.slice(0, req.query.limit));
    } else {
      res.json(pokemon.slice(0, 50));
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('something is wrong');
  }
}

async function getPokemonById (req, res) {
  try {
    const pokemon = await Pokemon.getPokemonById(req.params.id);
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getPokemonByType (req, res) {
  try {
    const pokemon = await Pokemon.getPokemonByType(req.params.id);
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

module.exports = { getAllPokemon, getPokemonById, getPokemonByType };
