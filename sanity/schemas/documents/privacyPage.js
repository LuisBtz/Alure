export default {
    //
    name: 'privacyPage',
    title: 'Privacy Policy',
    type: 'document',
    icon: () => `👮🏻‍♂️`,
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
          name: 'image',
          title: 'Image',
          type: 'imageType'
      },
      {
        title: 'blockModule', 
        name: 'Editor',
        type: 'blockModule', 
      }

    ],
  }