// import  userMutations from './user/resolver/mutations.js';
const userMutations = require('./user/resolver/mutations.js');
const userQueries = require('./user/resolver/query.js');

const resolvers = { 
    Query:  {
        ...userQueries
    },
    Mutation: {
        ...userMutations
    }
}

// export default resolvers;

module.exports = resolvers;