const routes = require("next-routes");

module.exports = routes()
  .add("index", "/")
  .add("business-of-marketing")
  .add("single", "/business-of-marketing/:slug");
