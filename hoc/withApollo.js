import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: `https://raconteur-agency-graphql.jakeherp.now.sh/`,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
