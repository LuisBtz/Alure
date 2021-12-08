import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

// markup
const PageNotFound  = () => {
  return (
    <Layout>
      <Seo  title='404'/* description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <h1>404 Page Not found!</h1>
    </Layout>
  )
}

export default PageNotFound 
