import Link from "next/link";
import Head from "next/head";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Layout from "../components/Layout";

export const POST_DATA = gql`
  fragment PostData on Post {
    __typename
    id
    date
    title
    slug
    excerpt
    categories {
      name
    }
    featuredMedia {
      guid
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts($after: String) {
    posts(after: $after) {
      cursor
      hasMore
      posts {
        ...PostData
      }
    }
  }
  ${POST_DATA}
`;

export default function Posts() {
  return (
    <Layout>
      <Head>
        <title>Business of Marketing</title>
        <meta name="description" content="Prototype of the BoM hub." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Posts</h1>
      <Query query={GET_POSTS}>
        {({ data, loading, error, fetchMore }) => {
          if (loading) return <p>Loading ...</p>;
          if (error) return <p>Error loading posts</p>;

          return (
            <ul className="grid">
              {data.posts &&
                data.posts.posts &&
                data.posts.posts.map(post => (
                  <li key={post.id} className="grid-item">
                    <Link
                      prefetch
                      href={`/single?slug=${post.slug}`}
                      as={`/business-of-marketing/${post.slug}`}
                    >
                      <a>
                        <img src={post.featuredMedia.guid} />
                        <div className="text">
                          <span>{post.categories.name}</span>
                          <h3>{post.title}</h3>
                          <small>{post.excerpt.substring(3, 104)}...</small>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              {data.posts && data.posts.hasMore && (
                <button
                  onClick={() =>
                    fetchMore({
                      variables: {
                        after: data.posts.cursor
                      },
                      updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                        if (!fetchMoreResult) return prev;
                        return {
                          ...fetchMoreResult,
                          posts: {
                            ...fetchMoreResult.posts,
                            posts: [
                              ...prev.posts.posts,
                              ...fetchMoreResult.posts.posts
                            ]
                          }
                        };
                      }
                    })
                  }
                >
                  Load more
                </button>
              )}
            </ul>
          );
        }}
      </Query>
    </Layout>
  );
}
