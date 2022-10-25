const db = require('../db.js');
const { parseMany, parseOne } = require('../util/parse-pokemon');

async function getAllPokemon () {
  const data = await db;
  return parseMany(data.pokemon);
}

async function getPokemonById (id) {
  const data = await db;
  const pokemon = data.pokemon.find(pokemon => {
    return pokemon.id == id;
  });
  return parseOne(pokemon);
}

async function getPokemonByType (id) {
  const data =  await db;
  const filteredData = data.pokemon.filter(pokemon => {
    return pokemon.types.includes(id);
  }).slice(0, 50);
  return parseMany(filteredData);
}

module.exports = { getAllPokemon, getPokemonById, getPokemonByType };
