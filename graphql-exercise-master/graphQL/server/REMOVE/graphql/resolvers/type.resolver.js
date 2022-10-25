
const pokemonResolver = {
  types: ({ types }, _, db) => {
    return types.map(typeId => db.types.find(({id}) => id === typeId));
  },
  moves: ( { moves }, _, db) => {
    return moves.map(moveId => db.moves.find(({id}) => id === moveId));
  },
  front_pic: ({ id }) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  },
  back_pic: ({ id }) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
  },
  name: ({ identifier }) => identifier.charAt(0).toUpperCase() + identifier.slice(1)
};

const moveResolver = {
  type: (move, _, db) => db.types.find(({id}) => move.type_id === id)
};

module.exports = { pokemonResolver, moveResolver };
