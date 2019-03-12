const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    posts: [Post]!
    post(id: ID!): Post
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
    categories: [Categories]
    tags: [Tags]
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
    details: [MediaDetails]
    post: Int
  }

  type MediaDetails {
    width: Int
    height: Int
    file: String
  }

  type Categories {
    id: ID!
    count: Int
    name: String!
    description: String
    slug: String!
    parent: Categories
  }

  type Tags {
    id: ID!
    count: Int
    name: String!
    description: String
    slug: String!
  }
`;

module.exports = typeDefs;
