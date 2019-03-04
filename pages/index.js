import Head from "next/head";

import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <Head>
      <title>Raconteur Agency Prototype</title>
      <meta
        name="description"
        content="This is a prototype built with Next.js"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Welcome!</h1>
  </Layout>
);

export default Index;
