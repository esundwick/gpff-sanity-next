import {defineField,defineType} from "sanity"

export const genreType = defineType({
    name: 'genre',
    type: 'document',
    title: 'Game Genres',
 //   liveEdit: true,
    fields: [
        defineField({
            name: 'genreName',
            type: 'string',
            title: 'Genre'
        })
    ]
})

