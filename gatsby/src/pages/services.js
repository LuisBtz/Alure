import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

// markup
const ServicesPage = () => {
  return (
    <Layout>
      <Seo title='services' /*  description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <h1>Services Page</h1>
    </Layout>
  )
}

export default ServicesPage
