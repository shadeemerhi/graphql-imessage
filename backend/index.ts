import { ApolloServer, gql } from "apollo-server-express";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";
import express from "express";

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Listening on Port 4000");
  });
};

main().catch((err) => console.log(err));
