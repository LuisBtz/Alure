// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'



import singleText from './objects/singleText'
import imageType from './objects/imageType'
import videoType from './objects/videoType'
import longText from './objects/longText'
import members from './objects/members'
import testimonial from './objects/testimonial'
import client from './objects/client'
import blockModule from './objects/blockModule'
import postObject from './objects/postObject'

import settingsPage from './documents/settingsPage'
import homePage from './documents/homePage'
import aboutPage from './documents/aboutPage'
import servicesPage from './documents/servicesPage'
import clientsPage from './documents/clientsPage'
import blog from './documents/blog'
import termsPage from './documents/termsPage'
import privacyPage from './documents/privacyPage'

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([

    singleText,
    imageType,
    videoType,
    longText,
    members,
    testimonial,
    client,
    blockModule,
    postObject,

    settingsPage,
    homePage,
    aboutPage,
    servicesPage,
    clientsPage,
    blog,
    termsPage,
    privacyPage,
  ]),
})
