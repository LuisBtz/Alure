export default {
    name: 'postObject',
    title: 'Post',
    type: 'object',
    fields: [
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: [
                {
                    type: 'blog'
                }
            ],
          }
    ]
}