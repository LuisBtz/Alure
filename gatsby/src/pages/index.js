import { graphql } from 'gatsby'
import React from 'react'
import Video from '../components/home/video'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

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
const IndexPage = ({data}) => {
  return (
    <Layout>
      <Seo /* title={data.sanityHomePage.seo && data.sanityHomePage.seo.es.titleSeo} description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <Video data={data} />
    </Layout>
  )
}

export default IndexPage
