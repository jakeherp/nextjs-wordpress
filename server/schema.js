const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    posts: [Post]!
    users: [Users]!
    mediaFiles: [Media]!
    post(id: ID!): Post
    user(id: ID!): Users
    media(id: ID!): Media
    categories(id: ID!): Categories
  }

  type Post {
    id: ID!
    date: String
    modified: String
    slug: String!
    status: String!
    title: String!
    content: String
    excerpt: String
    author: Users
    featuredMedia: Media
    categories: Categories
  }

  type Users {
    id: ID!
    name: String!
    description: String
    slug: String
    avatar: [String]
  }

  type Media {
    id: ID!
    date: String
    modified: String
    slug: String
    guid: String
    title: String
    author: Users
    description: String
    altText: String
    mimeType: String
    width: Int
    height: Int
    file: String
    post: Int
  }

  type Categories {
    id: ID!
    count: Int
    name: String!
    description: String
    slug: String!
    parent: Categories
  }
`;

module.exports = typeDefs;
