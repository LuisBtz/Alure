export default {
    //
    name: 'blog',
    title: 'Blog',
    type: 'document',
    icon: () => `📝`,
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
          name: 'blogImage',
          title: 'Blog Image',
          type: 'imageType'
      },
      {
          name: 'author',
          title: 'Author',
          type: 'string'
      },
      {
        title: 'blockModule', 
        name: 'Editor',
        type: 'blockModule', 
      }

    ],
  }