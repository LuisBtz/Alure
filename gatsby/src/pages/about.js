import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

// markup
const AboutPage = () => {
  return (
    <Layout>
      <Seo /* title={data.sanityHomePage.seo && data.sanityHomePage.seo.es.titleSeo} description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <h1>About Page</h1>
    </Layout>
  )
}

export default AboutPage
