module.exports = {
  Query: {
    posts: async (_, __, { dataSources }) =>
      dataSources.wordpressAPI.getAllPosts(),
    post: (_, { id }, { dataSources }) =>
      dataSources.wordpressAPI.getPostById({ postId: id }),
    guides: async (_, __, { dataSources }) =>
      dataSources.wordpressAPI.getAllGuides(),
    guide: (_, { id }, { dataSources }) =>
      dataSources.wordpressAPI.getGuideById({ guideId: id }),
    user: (_, { id }, { dataSources }) =>
      dataSources.wordpressAPI.getUserById({ userId: id }),
    media: (_, { id }, { dataSources }) =>
      dataSources.wordpressAPI.getMediaById({ mediaId: id }),
    categories: (_, { id }, { dataSources }) =>
      dataSources.wordpressAPI.getCategoriesByIds({ categoryIds: id })
  }
};
