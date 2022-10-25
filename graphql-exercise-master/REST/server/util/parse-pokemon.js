const {HOST, PORT} = require('../config');

function parseMany (data) {
  return data.map(pokemon => {
    const {id, name, url, front_pic, back_pic } = parseOne(pokemon);
    return { id, name, url, front_pic, back_pic };

  });
}

function parseOne (poke) {
  return {
    ...poke,
    name: formatName(poke.identifier),
    url: `http://${HOST}:${PORT}/pokemon/${poke.id}/`,
    front_pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`,
    back_pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${poke.id}.png`
  };
}


function formatName (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

module.exports = { parseMany, parseOne };
