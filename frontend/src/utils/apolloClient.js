import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
});

export default client;
