// import  {join}  from 'path';
// import { readdirSync, readFileSync } from 'fs';
// import { makeExecutableSchema } from '@graphql-tools/schema';
// import resolvers from './index.js';

const path = require('path');
const fs = require('fs');
const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require('./index.js');

const gqlFiles = fs.readdirSync(path.join(__dirname, './user/typedefs'));

let typeDefs = '';

gqlFiles.forEach((file) => {
    typeDefs += fs.readFileSync(path.join(__dirname, './user/typedefs', file), {
      encoding: 'utf8',
    });
});

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// export default schema;
module.exports = schema;
