export default {
    //
    name: 'clientsPage',
    title: 'Clients Page',
    type: 'document',
    icon: () => `🌎`,
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
            name: 'testimonialsSectionTitle',
            title: 'Testimonials Section Title',
            type: 'singleText'
        },
        {
            name: 'testimonialsSectionText',
            title: 'Testimonials Section Text',
            type: 'longText'
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [
              {
                type: 'testimonial'
              }
            ]
        },
        {
            name: 'clientsSectionTitle',
            title: 'Clients Section Title',
            type: 'singleText'
        },
        {
            name: 'clients',
            title: 'Clients',
            type: 'array',
            of: [
              {
                type: 'client'
              }
            ],
        },
    ]
}