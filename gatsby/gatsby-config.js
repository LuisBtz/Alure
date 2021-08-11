const path = require('path');


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Alure Agency",
    author: 'Matias Roca',
    siteUrl: 'https://www.netlify.com/',
    social: {
      twitter: `schaudustin`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "u6rfx2n4",
        dataset: "production",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `u6rfx2n4`,
        dataset: `production`,
        token: process.env.SANITY_GATSBY,
        watchMode: true,
      },
    },
  ],
};
