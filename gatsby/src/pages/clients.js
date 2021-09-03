import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

// markup
const ClientsPage = () => {
  return (
    <Layout>
      <Seo title='clients' /* description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <h1>Clients Page</h1>
    </Layout>
  )
}

export default ClientsPage