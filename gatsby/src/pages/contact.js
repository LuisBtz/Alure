import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

// markup
const ContactPage = () => {
  return (
    <Layout>
      <Seo title='contact' /* description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <h1>Contact Page</h1>
    </Layout>
  )
}

export default ContactPage
