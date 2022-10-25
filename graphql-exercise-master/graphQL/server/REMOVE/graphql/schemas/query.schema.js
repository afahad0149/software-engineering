const queries = `
  type Query {
    getAllTypes: [Type]!
    getPokemon(limit: Int = 50): [Pokemon]!
    getPokemonById(id: String!): Pokemon
    getPokemonByType(id: String!): [Pokemon]!
    getWishList: String
  }
`;

module.exports = queries;
