import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

// markup
const BlogPage = () => {
  return (
    <Layout>
      <Seo title='blog' /*  description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <h1>Blog Page</h1>
    </Layout>
  )
}

export default BlogPage