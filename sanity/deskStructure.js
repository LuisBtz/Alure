// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
          .title('Settings')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.listItem()
        .title('Home')
        .icon(() => '🏡')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
        S.listItem()
        .title('About')
        .icon(() => '🤔')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
        S.listItem()
        .title('Services')
        .icon(() => '🛩 ')
        .child(
          S.document()
            .schemaType('servicesPage')
            .documentId('servicesPage')
        ),
        S.listItem()
        .title('Clients')
        .icon(() => '🌎')
        .child(
          S.document()
            .schemaType('clientsPage')
            .documentId('clientsPage')
        ),
        S.listItem()
        .title('Terms & Coditions')
        .icon(() => '🚨')
        .child(
          S.document()
            .schemaType('termsPage')
            .documentId('termsPage')
        ),
        S.listItem()
        .title('Privacy Policy')
        .icon(() => '👮🏻‍♂️')
        .child(
          S.document()
            .schemaType('privacyPage')
            .documentId('privacyPage')
        ),
        S.divider(),
        ...S.documentTypeListItems().filter(listItem => !['homePage', 'aboutPage', 'servicesPage', 'clientsPage', 'settingsPage', 'termsPage', 'privacyPage'].includes(listItem.getId()))
    ])