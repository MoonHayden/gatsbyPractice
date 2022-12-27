/**
 * @type {import('gatsby').GatsbyConfig}
 */
// module.exports = {
//   siteMetadata: {
//     title: `gatsbyPractice`,
//     siteUrl: `https://www.yourdomain.tld`,
//   },
//   plugins: [],
// };

module.exports = {
  siteMetadata: {
    title: `Using Gatsby Head`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `http://localhost:8000/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
