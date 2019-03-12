const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const WordPressAPI = require("./datasources/wordpress");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    wordpressAPI: new WordPressAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
