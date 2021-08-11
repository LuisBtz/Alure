export default {
    name: 'members',
    title: 'Member',
    type: 'object',
    fields: [
        {
            name: 'membersName',
            title: 'Members Name',
            type: 'string'
        },
        {
            name: 'membersImage',
            title: 'Members Image',
            type: 'imageType'
        },
        {
            name: 'membersPosition',
            title: 'Members Position',
            type: 'singleText'
        },
        {
            name: 'membersDescription',
            title: 'Members Description',
            type: 'longText'
        },
    ]
}