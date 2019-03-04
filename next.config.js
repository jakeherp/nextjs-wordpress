const wp = require("nextjs-wp");

module.exports = {
  async exportPathMap() {
    /* URL to WordPress */
    let url = "https://agency.raconteur.net/wp-json/wp/v2/posts";

    /* Points /burgers/wp-slug/ to our burgers.js page */
    const allPosts = await wp.getPostUrl(url, "posts", [["id", "id"]], "posts");

    /* Points /burgers/wp-slug/details to our details.js page */
    const postDetails = await wp.getPostUrl(
      url,
      "details",
      [["id", "id"]],
      "posts/details"
    );

    /* Some other pages we defined manually */
    const otherPages = {
      "/": { page: "/" }
    };

    /* Combining everything */
    return wp.combineRoutes([allPosts, postDetails, otherPages]);
  }
};

const withImages = require("next-images");
module.exports = withImages();

const withSass = require("@zeit/next-sass");
module.exports = withSass();
