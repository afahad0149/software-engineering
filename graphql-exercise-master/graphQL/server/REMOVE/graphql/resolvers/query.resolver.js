const queryResolver = {
  getAllTypes: (_, __, { types }) => types,
  getPokemon: (_, { limit }, { pokemon }) => pokemon.slice(0, limit),
  getPokemonById: (_, { id }, { pokemon }) => pokemon.find(poke => poke.id == id),
  getPokemonByType: (_, { id }, { pokemon }) => pokemon.filter(poke => poke.types.includes(id)),
  getWishList: (_, __, { wishlist}) => JSON.stringify(wishlist)
};

module.exports = queryResolver;
