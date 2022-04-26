const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

const express = require("express");

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 8000 }, () => {
    console.log("SERVER RUNNING ON PORT 8000");
  });
}

startServer();
