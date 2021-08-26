export default {
    //
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: () => `🏠`,
    fields: [
      {
        name: 'title',
        title: ' Site Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
      },
      {
        name: 'videoHero',
        title: 'Hero Background Video',
        type: 'videoType'
      },
      {
        name: 'singleTextHero',
        title: 'Headline Hero',
        type: 'singleText'
      },
      {
        name: 'heroSmallTextHero',
        title: 'Hero Small Text Hero',
        type: 'singleText'
      },
      {
        name: 'aboutSectionBackground',
        title: 'About Section Background',
        type: 'imageType'
      },
      {
        name: 'title1AboutSection',
        title: 'Title #1 About Section',
        type: 'singleText'
      },
      {
        name: 'subtitle1AboutSection',
        title: 'Subtitle #1 About Section',
        type: 'singleText'
      },
      {
        name: 'title2AboutSection',
        title: 'Title #2 About Section',
        type: 'singleText'
      },
      {
        name: 'subtitle2AboutSection',
        title: 'Subtitle #2 About Section',
        type: 'singleText'
      },
      {
        name: 'linkAboutSectionText',
        title: 'Link About Section Text',
        type: 'singleText'
      },
      {
        name: 'servicesSectionBackground',
        title: 'Services Section Background',
        type: 'imageType'
      },
      {
        name: 'servicesTitleSection',
        title: 'Services Title Section',
        type: 'singleText'
      },
      {
        name: 'servicesSectionLinkText',
        title: 'Services Section Link  Text',
        type: 'singleText'
      },
      {
        name: 'blogSectionBackground',
        title: 'Blog Section Background',
        type: 'imageType'
      },
      {
        name: 'titleBlogSection',
        title: 'Title Blog Section',
        type: 'singleText'
      },
      {
        name: 'subtitleBlogSection',
        title: 'Subtitle Blog Section',
        type: 'singleText'
      },
      {
        name: 'blogSectionLinkText',
        title: 'Blog Section Link Text',
        type: 'singleText'
      },
      
    ],
  }