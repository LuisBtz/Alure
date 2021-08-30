import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

// markup
const Terms = () => {
  return (
    <Layout>
      <Seo title='about' /* description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <h1>Terms Page</h1>
    </Layout>
  )
}

export default Terms
