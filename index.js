// import express from 'express';
// import graphqlHTTP from 'express-graphql';
// import cors from 'cors';
// // import { buildSchema,graphqlServer } from 'graphql';
// import apolloServer from './src/features/apolloServer.js';

const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const { apolloServer } = require('./src/features/apolloServer.js');
const app = express();

// let appSchema = buildSchema(schema);

app.use(cors());
app.use(express.json());
// app.use('/graphql', graphqlHTTP({
//     appSchema,
//     graphiql: true
// }))
apolloServer.applyMiddleware({
    app,
});
  
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
