const { RESTDataSource } = require("apollo-datasource-rest");

class WordPressAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://agency.raconteur.net/wp-json/wp/v2/";
  }

  async getAllPosts() {
    const response = await this.get("posts");
    return Array.isArray(response)
      ? response.map(post => this.postReducer(post))
      : [];
  }

  postReducer(post) {
    return {
      id: post.id || 0,
      date: post.date,
      modified: post.modified,
      slug: post.slug,
      status: post.status,
      title: post.title.rendered,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered,
      author: {
        id: post.users.id,
        name: post.users.name,
        description: post.users.description,
        slug: post.users.slug,
        avatar: [post.users.avatar_urls]
      },
      featuredMedia: {
        id: post.media.id,
        date: post.media.date,
        modified: post.media.modified,
        slug: post.media.slug,
        guid: post.media.guid,
        title: post.media.title,
        author: {
          id: post.users.id,
          name: post.users.name,
          description: post.users.description,
          slug: post.users.slug,
          avatar: [post.users.avatar_urls]
        },
        description: post.media.description.rendered,
        altText: post.media.alt_text,
        mimeType: post.media.mime_type,
        details: {
          width: post.media.media_details.width,
          height: post.media.media_details.height,
          file: post.media.media_details.file
        },
        post: post.media.post
      },
      categories: [post.categories],
      tags: [post.tags]
    };
  }

  async getPostById({ postId }) {
    const response = await this.get("posts", { id: postId });
    return this.postReducer(response[0]);
  }

  getPostsByIds({ postIds }) {
    return Promise.all(postIds.map(postId => this.getPostById({ postId })));
  }
}

module.exports = WordPressAPI;
