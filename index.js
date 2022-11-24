const {ApolloServer} = require('apollo-server');
const {PORT = 3010} = process.env;
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const server = new ApolloServer({typeDefs,resolvers});

server
    .listen(PORT)
    .then(({ url }) => console.log(`Server is running at ${url}`));