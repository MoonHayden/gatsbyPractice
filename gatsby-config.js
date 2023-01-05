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
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: "secret_696MzwD8Myz3yvePJN4UPjano9HGSDDAe8w5QGkWoCo",
        databaseId: "a1d555bed5d349919fda5d239d752e52",
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
  ],
};
