import axios from "axios";
import Link from "next/link";
import Head from "next/head";

import Layout from "../components/Layout";

export default class extends React.Component {
  static async getInitialProps() {
    const response = await axios.get(
      "https://agency.raconteur.net/wp-json/wp/v2/posts?per_page=24&_embed"
    );

    return {
      posts: response.data
    };
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Business of Marketing</title>
          <meta name="description" content="Prototype of the BoM hub." />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h1>Posts</h1>
        <ul className="grid">
          {this.props.posts.map(post => {
            return (
              <li key={post.id} className="grid-item">
                <Link
                  prefetch
                  href={`/single?slug=${post.slug}`}
                  as={`/business-of-marketing/${post.slug}`}
                >
                  <a>
                    <img
                      src={
                        post._embedded["wp:featuredmedia"][0].media_details
                          .sizes.medium.source_url
                      }
                    />
                    <div className="text">
                      <span>Blog</span>
                      <h3>{post.title.rendered}</h3>
                      <small>
                        {post.excerpt.rendered.substring(3, 104)}...
                      </small>
                    </div>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}
