module.exports = {
  Query: {
    posts: async (_, __, { dataSources }) =>
      dataSources.wordpressAPI.getAllPosts(),
    post: (_, { id }, { dataSources }) =>
      dataSources.wordpressAPI.getPostById({ postId: id }),
    user: (_, { id }, { dataSources }) =>
      dataSources.wordpressAPI.getUserById({ userId: id }),
    media: (_, { id }, { dataSources }) =>
      dataSources.wordpressAPI.getMediaById({ mediaId: id })
  }
};
