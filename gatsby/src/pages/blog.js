import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/blog/Hero'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import Posts from '../components/blog/Posts'

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
          blogImage {
            enAlt
            asset {
              gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: DOMINANT_COLOR
              )
            }
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
      <Posts data={data} />
    </Layout>
  )
}

export default BlogPage
