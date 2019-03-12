module.exports = {
  Query: {
    posts: async (_, __, { dataSources }) =>
      dataSources.wordpressAPI.getAllPosts(),
    post: (_, { id }, { dataSources }) =>
      dataSources.wordpressAPI.getPostById({ postId: id })
  }
};
