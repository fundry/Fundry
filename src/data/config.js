import ApolloClient from "apollo-boost";

if (!process.env.API_URL) {
  console.error("Missing credentials .... check .env file!");
}

const Client = new ApolloClient({
  uri: process.env.API_URL
});

export default Client;
