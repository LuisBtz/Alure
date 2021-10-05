import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import Hero from '../components/clients/Hero'
import Clients from '../components/clients/Clients'
import Logos from '../components/clients/Logos'
import Next from '../components/clients/Next'


export const data = graphql`
  query {
    sanityClientsPage {
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
      principalTextHero {
        en
      }
      linksTextHero {
        en
      }


    clients {
        _key
        link
        logo {
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

    }


#Settings
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
const ClientsPage = ({data}) => {
  return (
    <Layout>
      <Seo title='clients' /* description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <Hero data={data} />
      <Clients />
      <Logos data={data} />
      <Next />
    </Layout>
  )
}

export default ClientsPage
