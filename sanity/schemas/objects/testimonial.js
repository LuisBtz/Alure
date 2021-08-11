export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'object',
    fields: [
        {
            name: 'testimonialText',
            title: 'Testimonial Text',
            type: 'longText'
        },
        {
            name: 'testimonialImage',
            title: 'Testimonial Image',
            type: 'imageType'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'testimonialPosition',
            title: 'Testimonial Position',
            type: 'singleText'
        },
    ]
}