#Full Stack Headless WordPress

This is a prototype for a custom headless CMS using React, Next, Express and Apollo.

## Libraries used

- [ReactJS](https://www.npmjs.com/package/react)
- [Next.js](https://www.npmjs.com/package/next)
- [Express](https://www.npmjs.com/package/express)
- [React Apollo](https://www.npmjs.com/package/react-apollo)
- [GraphQL](https://www.npmjs.com/package/graphql)

### Smaller packages

- [Next Sass](https://www.npmjs.com/package/@zeit/next-sass)
- [Next Images](https://www.npmjs.com/package/next-images)
- [Next nprogress](https://www.npmjs.com/package/next-nprogress)
- [Next Page Transitions](https://www.npmjs.com/package/next-page-transitions)
- [Next with Apollo](https://www.npmjs.com/package/next-with-apollo)
- [Apollo Boost](https://www.npmjs.com/package/apollo-boost)
- [Styled Components](https://www.npmjs.com/package/babel-plugin-styled-components)

## Structure

.<br>
├── components<br>
| ├── footer<br>
| └── header<br>
├── hoc<br>
├── pages<br>
├── sass<br>
| └── layout<br>
└── **server**<br>
└── datasources

## Installation

### Next.js Application

Install the Next.js application with its Express server using
`npm install`

Run the Next.js application using
`npm run dev`

### Apollo Server

Install the Apollo server using
`cd server && npm install`

Run the Apollo server using
`node index.js`

The server is online available at https://raconteur-agency-graphql.jakeherp.now.sh/

Deploy server to [Zeit Now](https://www.npmjs.com/package/now) using the `now` command. The deployment can be customised in the `/server/now.json` file.
