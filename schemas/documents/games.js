import {defineArrayMember,defineField, defineType} from "sanity"

export const gameType = defineType({
    name: 'game',
    type: 'document',
    title: 'Games',
    fields: [
        defineField({
            title: 'Name',
            type: 'string',
            name: 'gameName'
        }),
        defineField({
            title: 'Description',
            type: 'text',
            name: 'gameDesc'
        }),
        defineField({
            title: 'Box shot',
            type: 'image',
            name: 'boxshot'
        }),
        defineField({
            title: 'Genre',
            type: 'array',
            of: [
                defineArrayMember({type:'reference', weak: true, to: [
                    {type: 'genre'}
                ]})
            ],
//            layout: 'tags',
            name: 'gameGenre'
        }),
        defineField({
            title: 'Release Date',
            type: 'date',
            name: 'releasedate'
        }),
        defineField({
            title: 'Platforms',
            name: 'gamePlat',
            type: 'array',
            of: [
                defineArrayMember({type: 'reference', weak: true, to: [
                    {type: 'platform'}
                ]})
            ],
//            layout: 'tags',
            description: 'Where can you play this?'
        })
    ]
})