import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Post {
    title: String
    author: String
    body: String
  }

  input NewPostInput {
    title: String!
    author: String!
    body: String!
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost(post: NewPostInput!): [Post]
  }

  type Subscription {
    newPostAdded(postId: ID!): Post
  }
`;

export default typeDefs;
