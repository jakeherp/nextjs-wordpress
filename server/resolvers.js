const { paginateResults } = require("./utils");

module.exports = {
  Query: {
    posts: async (_, { pageSize = 3, after }, { dataSources }) => {
      const allPosts = await dataSources.wordpressAPI.getAllPosts();
      // Get posts in reverse chronological order
      allPosts.reverse();

      const posts = paginateResults({
        after,
        pageSize,
        results: allPosts
      });

      return {
        posts,
        cursor: posts.length ? posts[posts.length - 1].cursor : null,
        hasMore: posts.length
          ? posts[posts.length - 1].cursor !==
            allPosts[allPosts.length - 1].cursor
          : false
      };
    },
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
