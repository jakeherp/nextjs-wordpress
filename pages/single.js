import axios from "axios";
import Head from "next/head";

import Layout from "../components/Layout";

export default class extends React.Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;
    const response = await axios.get(
      `https://agency.raconteur.net/wp-json/wp/v2/posts?slug=${slug}`
    );

    return {
      post: response.data[0]
    };
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>
            {this.props.post.title.rendered} – Business of Marketing
          </title>
          <meta name="description" content={this.props.post.excerpt.rendered} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h1>{this.props.post.title.rendered}</h1>
        <article
          className="entry-content"
          dangerouslySetInnerHTML={{
            __html: this.props.post.content.rendered
          }}
        />
      </Layout>
    );
  }
}
