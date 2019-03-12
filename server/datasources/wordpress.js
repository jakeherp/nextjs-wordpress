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

  async getPostById({ postId }) {
    const response = await this.get("posts", { id: postId });
    return this.postReducer(response[0]);
  }

  getPostsByIds({ postIds }) {
    return Promise.all(postIds.map(postId => this.getPostById({ postId })));
  }

  async getUserById(userId) {
    const response = await this.get(`users/${userId}`);
    return this.usersReducer(response);
  }

  async getMediaById(mediaId) {
    const response = await this.get(`media/${mediaId}`);
    return this.mediaReducer(response);
  }

  postReducer(post) {
    return {
      id: post.id,
      date: post.date,
      modified: post.modified,
      slug: post.slug,
      status: post.status,
      title: post.title.rendered,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered,
      author: Promise.resolve(this.getUserById(post.author)),
      featuredMedia: Promise.resolve(this.getMediaById(post.featured_media)),
      categories: [post.categories],
      tags: [post.tags]
    };
  }

  usersReducer(user) {
    return {
      id: user.id,
      name: user.name,
      description: user.description,
      slug: user.slug,
      avatar: [user.avatar_urls]
    };
  }

  mediaReducer(media) {
    return {
      id: media.id,
      date: media.date,
      modified: media.modified,
      slug: media.slug,
      guid: media.guid.rendered,
      title: media.title.rendered,
      author: Promise.resolve(this.getUserById(media.author)),
      description: media.description.rendered,
      altText: media.alt_text,
      mimeType: media.mime_type,
      width: media.media_details.width,
      height: media.media_details.height,
      file: media.media_details.file
    };
  }
}

module.exports = WordPressAPI;
