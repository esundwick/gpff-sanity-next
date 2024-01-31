import {defineType, defineField} from "sanity"

export const platformType = defineType({
    name: 'platform',
    type: 'document',
    title: 'Game Platforms',
 //   liveEdit: true,
    fields: [
        defineField({
            name: 'Name',
            type: 'string',
            title: 'Platform name'
        }),
        defineField({
            name: 'platIcon',
            type: 'image',
            title: 'Platform icon'
        })
    ]
})