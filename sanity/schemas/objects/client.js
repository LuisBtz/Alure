export default {
    name: 'client',
    title: 'Client',
    type: 'object',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'imageType'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        }
    ],
    preview: {
        select: {
          title: 'logo.enAlt',
          subtitle: 'link',
          media: 'logo'
        }
      }
}
