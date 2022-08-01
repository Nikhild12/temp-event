// import { ApolloServer } from 'apollo-server-express';
// import schema from './schema.js';
const { ApolloServer, gql } = require('apollo-server-express');
const schema = require('./schema.js');

const apolloServer = new ApolloServer({
    schema,
    playground: "development",
  });
  
module.exports = apolloServer;