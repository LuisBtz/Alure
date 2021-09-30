export default {
    name: 'servicesPage',
    title: 'Services Page',
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
            name: 'salesSectionNetworkTitle',
            title: 'Sales Section Network Title',
            type: 'singleText'
        },
        {
            name: 'salesSectionNetworkText',
            title: 'Sales Section Network Text',
            type: 'longText'
        },
        {
            name: 'salesSectionNetworkImage',
            title: 'Sales Section Network Image',
            type: 'imageType'
        },
        {
            name: 'salesSectionPersonalizedTitle',
            title: 'Sales Section Personalized Title',
            type: 'singleText'
        },
        {
            name: 'salesSectionPersonalizedText',
            title: 'Sales Section Personalized Text',
            type: 'longText'
        },
        {
            name: 'salesSectionSalesTitle',
            title: 'Sales Section Sales Title',
            type: 'singleText'
        },
        {
            name: 'linksTextSalesSection',
            title: 'Links Text Sales Section',
            type: 'singleText'
        },
        {
            name: 'salesServicesTitle',
            title: 'Sales Services Title',
            type: 'singleText'
        },
        {
            name: 'salesServicesText',
            title: 'Sales Services Text',
            type: 'longText'
        },
        {
            name: 'salesServicesImages',
            title: 'Sales Services Image',
            type: 'imageType'
        },
        {
            name: 'salesServicesService1',
            title: 'Sales Services Service #1',
            type: 'singleText'
        },
        {
            name: 'salesServicesService2',
            title: 'Sales Services Service #2',
            type: 'singleText'
        },
        {
            name: 'salesServicesService3',
            title: 'Sales Services Service #3',
            type: 'singleText'
        },
        {
            name: 'salesServicesService4',
            title: 'Sales Services Service #4',
            type: 'singleText'
        },
        {
            name: 'salesServicesService5',
            title: 'Sales Services Service #5',
            type: 'singleText'
        },
        {
            name: 'salesServicesService6',
            title: 'Sales Services Service #6',
            type: 'singleText'
        },
        {
            name: 'salesServicesService7',
            title: 'Sales Services Service #7',
            type: 'singleText'
        },
        {
            name: 'salesServicesService8',
            title: 'Sales Services Service #8',
            type: 'singleText'
        },
        {
            name: 'publicRelationsSectionTitle',
            title: 'Public Relations Section Title',
            type: 'singleText'
        },
        {
            name: 'publicRelationsSectionTitleText',
            title: 'Public Relations Section Text',
            type: 'longText'
        },
        {
            name: 'publicRelationsSectionTitleText2',
            title: 'Public Relations Section Text #2',
            type: 'longText'
        },
        {
            name: 'publicRelationsSectionImages',
            title: 'Public Relations Section Image',
            type: 'imageType'
        },
        {
            name: 'linksTextPublicRelationsSection1',
            title: 'Links Text Public Relations Section #1',
            type: 'singleText'
        },
        {
            name: 'linksTextPublicRelationsSection2',
            title: 'Links Text Public Relations Section #2',
            type: 'singleText'
        },
        {
            name: 'publicRelationsServicesTitle',
            title: 'Public Relations Services Title',
            type: 'singleText'
        },
        {
            name: 'publicRelationsServicesText',
            title: 'Public Relations Services Text',
            type: 'longText'
        },
        {
            name: 'linksTextPublicRelationsServices',
            title: 'Links Text Public Relations Services',
            type: 'singleText'
        },
        {
            name: 'publicRelationsServicesService1',
            title: 'Public Relations Services Service #1',
            type: 'singleText'
        },
        {
            name: 'publicRelationsServicesService2',
            title: 'Public Relations Services Service #2',
            type: 'singleText'
        },
        {
            name: 'publicRelationsServicesService3',
            title: 'Public Relations Services Service #3',
            type: 'singleText'
        },
        {
            name: 'publicRelationsServicesService4',
            title: 'Public Relations Services Service #4',
            type: 'singleText'
        },
        {
            name: 'publicRelationsServicesService5',
            title: 'Public Relations Services Service #5',
            type: 'singleText'
        },
        {
            name: 'publicRelationsServicesService6',
            title: 'Public Relations Services Service #6',
            type: 'singleText'
        },
    ]
}