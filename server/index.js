const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const WordPressAPI = require("./datasources/wordpress");

const dataSources = () => ({
  wordpressAPI: new WordPressAPI()
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  dataSources
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

module.exports = {
  dataSources,
  typeDefs,
  resolvers,
  ApolloServer,
  WordPressAPI,
  server
};
