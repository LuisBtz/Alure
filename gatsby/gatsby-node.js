/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require('path');

async function turnPostsIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const artistTemplate = path.resolve('./src/templates/Post.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          posts:   allSanityBlog {
            nodes {
              slug {
                current
              }
              title
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.posts.nodes.forEach((post) => {
      actions.createPage({
          // url forths new page
          path: `/blog/${post.slug.current}`,
          component: artistTemplate,
          context: {
              language: 'es',
              slug: post.slug.current,
          }
      })
  });
}


exports.createPages = async (params) => {
// Create Pages dynamically
    await Promise.all([
        // 1. Posts
        turnPostsIntoPages(params),

    ])
}
