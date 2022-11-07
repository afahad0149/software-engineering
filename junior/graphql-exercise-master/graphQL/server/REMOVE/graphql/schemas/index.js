const { gql } = require('apollo-server');

const types = require('./types.schema');
const queries = require('./query.schema');
const mutations = require('./mutation.schema');

const typeDefs = gql`
  ${types}
  ${queries}
  ${mutations}
`;

module.exports = typeDefs;
