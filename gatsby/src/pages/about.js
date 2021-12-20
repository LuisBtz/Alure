import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import Hero from '../components/about/Hero'
import Connect from '../components/about/Connect'
import WhyUs from '../components/about/WhyUs'
import Team from '../components/about/Team'
import Next from '../components/about/Next'


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
      heroImageMovil {
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
      whyUsTitle {
      en
    }
    whyUsBackgroundImage {
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      whyUsBackgroundImageMovil {
        enAlt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      ourPhilosophyTitle {
        en
      }
      ourPhilosophyText {
        en
      }
      commitmentTitle {
        en
      }
      commitmentText {
        en
      }
      teamworkTitle {
        en
      }
      teamworkText {
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
      <WhyUs data={data} />
      <Team />
      <Next />
    </Layout>
  )
}

export default AboutPage
