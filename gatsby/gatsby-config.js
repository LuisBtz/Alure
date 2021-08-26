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
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
  ],
};
