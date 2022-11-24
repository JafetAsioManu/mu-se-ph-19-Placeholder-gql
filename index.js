const {ApolloServer} = require('@apollo/server');
const {PORT = 3010} = process.env;
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { startStandaloneServer } = require('@apollo/server/standalone');

const server = new ApolloServer({typeDefs,resolvers});

startStandaloneServer(server, {
    // Note: This example uses the `req` argument to access headers,
    // but the arguments received by `context` vary by integration.
    // This means they vary for Express, Fastify, Lambda, etc.
  
    // For `startStandaloneServer`, the `req` and `res` objects are
    // `http.IncomingMessage` and `http.ServerResponse` types.
    context: async ({ req, res }) => {
      // Get the user token from the headers.
      const token = req.headers.authorization || '';
  
      // Add the user to the context
      return { token };
    },
}).then((data) => { console.log(`Server is running at ${data.url}`)});