import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import Hero from '../components/services/Hero'
import Contact from '../components/services/Contact'
import Sales from '../components/services/Sales'
import Public from '../components/services/Public'
import PublicServices from '../components/services/PublicServices'
import Next from '../components/services/Next'


export const data = graphql`
  query {
    sanityServicesPage {
      heroImage {
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
        enAlt
      }
      linksTextHero {
        en
      }
      principalTextHero {
        en
      }
      

      salesSectionNetworkTitle {
        en
      }
      salesSectionNetworkText {
        en
      }
      salesSectionNetworkImage {
        enAlt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      salesSectionPersonalizedTitle {
        en
      }
      salesSectionPersonalizedText {
        en
      }
      linksTextSalesSection {
        en
      }
      salesSectionSalesTitle {
        en
      }

      linksTextSalesSection {
        en
      }


#Sales Services

    salesServicesTitle {
      en
    }
    salesServicesText {
      en
    }
    salesServicesImages {
      enAlt
      asset {
        gatsbyImageData(
          layout: FULL_WIDTH
          outputPixelDensities: 1.5
          placeholder: DOMINANT_COLOR
        )
      }
    }
    salesServicesService1 {
      en
    }
    salesServicesService2 {
      en
    }
    salesServicesService3 {
      en
    }
    salesServicesService4 {
      en
    }
    salesServicesService5 {
      en
    }
    salesServicesService6 {
      en
    }
    salesServicesService7 {
      en
    }
    salesServicesService8 {
      en
    }

    linksTextPublicRelationsSection1 {
      en
    }

# Public

publicRelationsSectionTitle {
  en
}
publicRelationsSectionTitleText {
  en
}
publicRelationsSectionTitleText2 {
  en
}
publicRelationsSectionImages {
  enAlt
  asset {
    gatsbyImageData(
      layout: FULL_WIDTH
      outputPixelDensities: 1.5
      placeholder: DOMINANT_COLOR
    )
  }
}
linksTextPublicRelationsSection2 {
  en
}




#Public Services


publicRelationsServicesTitle {
      en
    }
    publicRelationsServicesText {
      en
    }
    linksTextPublicRelationsServices {
      en
    }
    publicRelationsServicesService1 {
      en
    }
    publicRelationsServicesService2 {
      en
    }
    publicRelationsServicesService3 {
      en
    }
    publicRelationsServicesService4 {
      en
    }
    publicRelationsServicesService5 {
      en
    }
    publicRelationsServicesService6 {
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
const ServicesPage = ({data}) => {
  return (
    <Layout>
      <Seo title='services' /*  description={data.sanityHomePage.seo && data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} */ />
      <Hero data={data} />
      <Contact data={data} />
       <Sales data={data} />
      <Public data={data} />
      <PublicServices data={data} />
     <Next />
    </Layout>
  )
}

export default ServicesPage
