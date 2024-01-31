import {defineType, defineField} from "sanity"

export const postType = defineType({
    name: 'post',
    type: 'document',
    title: 'Blog Posts',
    fields: [
        defineField({
            name: 'postTitle',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'postDate',
            type: 'datetime',
            title: 'Published on',
            description: 'The date this post was originally published'
        }),
        defineField({
            name: 'postBody',
            type: 'text',
            title: 'Body of post'
        }),
        defineField({
            title: 'Author',
            name: 'postAuthor',
            type: 'reference',
            weak: true,
            to: [{type: 'person'}]
        }),
        defineField({
            name: 'postEp',
            type: 'reference',
            to: [{type: 'episode'}],
            title: 'Linked episode',
            description: 'Is this post linked to a podcast episode?'
        })
    ]
})