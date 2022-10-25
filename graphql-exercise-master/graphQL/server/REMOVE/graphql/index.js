'use strict';

const { ApolloServer } = require('apollo-server');
const db = require('../../db');

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const apolloServer = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: () => db
});

module.exports = apolloServer;
