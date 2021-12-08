import { graphql } from 'gatsby'
import React from 'react'
import Video from '../components/home/Video'
import About from '../components/home/About'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import Services from '../components/home/Services'
import Blog from '../components/home/Blog'
import Next from '../components/home/Next'
export const data = graphql`
  query {
    sanityHomePage {
      videoHero {
        mp4File {
          asset {
            url
          }
        }
        webmFile {
          asset {
            url
          }
        }
      }
      singleTextHero {
        en
      }
      heroSmallTextHero {
        en
      }
      aboutSectionBackground {
        enAlt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      title1AboutSection {
        en
      }
      title2AboutSection {
        en
      }
      subtitle1AboutSection {
        en
      }
      subtitle2AboutSection {
        en
      }
      linkAboutSectionText {
        en
      }
      servicesSectionBackground {
        enAlt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      servicesSectionLinkText {
        en
      }
      servicesTitleSection {
        en
      }
      blogSectionBackground {
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
        enAlt
      }
      blogSectionLinkText {
        en
      }
      titleBlogSection {
        en
      }
      subtitleBlogSection {
        en
      }
    }
    sanitySettingsPage {
      icon {
        asset {
          url
        }
      }
      email
      instagram
      facebook
    }
  }
`

const greenFooter = true

// markup
const IndexPage = ({data}) => {

  return (
    <Layout greenFooter={greenFooter}>
      <Seo  title='home' /*description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <Video data={data}/>
      <About data={data}/>
      <Services data={data}/>
      <Blog data={data}/>
      <Next/>
    </Layout>
  )
}

export default IndexPage
