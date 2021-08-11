export default {
    name: 'imageType',
    title: 'Image',
    options: {
        hotspot: true // <-- Defaults to false
      },
    type: 'image',
    fields: [
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'enAlt',
          type: 'string',
          title: 'English Alternative Text',
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'esAlt',
          type: 'string',
          title: 'Texto Alternativo Español',
        },
      ]
}