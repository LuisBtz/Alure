export default {
    //
    name: 'aboutPage',
    title: 'About Page',
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
          name: 'heroImage',
          title: 'Hero Image',
          type: 'imageType'
      },
      {
        name: 'principalTextHero',
        title: 'Principal Text Hero',
        type: 'singleText'
      },
      {
        name: 'linksTextHero',
        title: 'Links Text Hero',
        type: 'singleText'
      },
      {
        name: 'ourMissionTitle',
        title: 'Our Mission Title',
        type: 'longText'
      },
      {
        name: 'connectTitle',
        title: 'Connect Title',
        type: 'singleText'
      },
      {
        name: 'connectText',
        title: 'Connect Text',
        type: 'longText'
      },
      {
        name: 'inspireTitle',
        title: 'Inspire Title',
        type: 'singleText'
      },
      {
        name: 'inspireText',
        title: 'Inspire Text',
        type: 'longText'
      },
      {
        name: 'impactTitle',
        title: 'Impact Title',
        type: 'singleText'
      },
      {
        name: 'impactText',
        title: 'Impact Text',
        type: 'longText'
      },
      {
        name: 'whyUsTitle',
        title: 'Why Us Title',
        type: 'singleText',
      },
      {
        name: 'whyUsBackgroundImage',
        title: 'Why Us Background Image',
        type: 'imageType'
      },
      {
        name: 'ourPhilosophyTitle',
        title: 'Our Philosofy Title',
        type: 'singleText'
      },
      {
        name: 'ourPhilosophyText',
        title: 'Our Philosofy Text',
        type: 'longText'
      },
      {
        name: 'commitmentTitle',
        title: 'Commitment Title',
        type: 'singleText'
      },
      {
        name: 'commitmentText',
        title: 'Commitment Text',
        type: 'longText'
      },
      {
        name: 'teamworkTitle',
        title: 'Teamwork Title',
        type: 'singleText'
      },
      {
        name: 'teamworkText',
        title: 'Teamwork Text',
        type: 'longText'
      },
      {
        name: 'theTeamTitle',
        title: 'The Team Title',
        type: 'singleText'
      },
      {
        name: 'theTeamDescription',
        title: 'The Team Description',
        type: 'longText'
      },
      {
        name: 'theTeam',
        title: 'The Team',
        type: 'array',
        of: [
          {
            type: 'members'
          }
        ]
      }

    ],
  }