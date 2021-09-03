import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import Hero from '../components/about/Hero'
import Connect from '../components/about/Connect'


export const data = graphql`
  query {
    sanityAboutPage {
      principalTextHero {
        en
      }
      linksTextHero {
        en
      }
      heroImage {
        enAlt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      ourMissionTitle {
        en
      }
      connectTitle {
        en
      }
      connectText {
        en
      }
      inspireTitle {
        en
      }
      inspireText {
        en
      }
      impactTitle {
        en
      }
      impactText {
        en
      }
    }
    sanitySettingsPage {
      icon {
        asset {
          url
        }
      }
    }
  }
  `


// markup
const AboutPage = ({data}) => {
  return (
    <Layout>
      <Seo title='about' /* description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <Hero data={data} />
      <Connect data={data} />
    </Layout>
  )
}

export default AboutPage
