export default {
    //
    name: 'settingsPage',
    title: 'Settings',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'descriptionSite',
            title: 'Description Site',
            type: 'longText'
        },
        {
            name: 'alure',
            title: 'Alure',
            type: 'imageType'
        },
        {
            name: 'agency',
            title: 'Agency',
            type: 'imageType'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'imageType'
        },
        {
            name: 'iconColor',
            title: 'Icon Color',
            type: 'imageType'
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'blockModule'
        },
        {
            name: 'email',
            title: 'E-mail',
            type: 'string'
        },
        {
            name: 'instagram',
            title: 'Instagram Url',
            type: 'url'
        },
        {
            name: 'facebook',
            title: 'Facebook Url',
            type: 'url'
        },
        {
            name: 'blogBackgroundImage',
            title: 'Blog Background Image',
            type: 'imageType'
        },
        {
            name: 'blogBackgroundImageMovil',
            title: 'Blog Movil Background Image',
            type: 'imageType'
        }
    ],
}