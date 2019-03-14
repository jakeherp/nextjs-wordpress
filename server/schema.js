const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    posts(pageSize: Int, after: String): PostsConnection!
    guides: [Guide]!
    users: [User]!
    mediaFiles: [Media]!
    post(id: ID!): Post
    guide(id: ID!): Guide
    user(id: ID!): User
    media(id: ID!): Media
    categories(id: ID!): Categories
  }

  type PostsConnection {
    cursor: String!
    hasMore: Boolean!
    posts: [Post]!
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
    author: User
    featuredMedia: Media
    categories: Categories
  }

  type Guide {
    id: ID!
    date: String
    modified: String
    slug: String!
    status: String!
    title: String!
    content: String
    excerpt: String
    author: User
    featuredMedia: Media
    categories: Categories
  }

  type User {
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
    author: User
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
