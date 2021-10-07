import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/blog/Hero'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

export const data = graphql`
  query {
    sanitySettingsPage {
      blogBackgroundImage {
        enAlt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }
    
    allSanityBlog {
      edges {
        node {
          _key
          title
          slug {
            current
          }
          _createdAt(formatString: "MMMM DD YYYY")
        }
      }
    }
  }
`
// markup
const BlogPage = ({data}) => {
  return (
    <Layout>
      <Seo title='blog' /*  description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <Hero data={data} />
    </Layout>
  )
}

export default BlogPage
