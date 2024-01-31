import { defineType, defineField, defineArrayMember} from "sanity"

export const episodeType = defineType({
    name: 'episode',
    type: 'document',
    title: 'Podcast Episodes',
    fields: [
        defineField({
            name: 'epTitle',
            type: 'string',
            title: 'Episode Title'
        }),
        defineField({
            name: 'epNumber',
            type: 'number',
            title: 'Episode number'
        }),
        defineField({
            name: 'epAudio',
            type: 'file',
            title: 'Episode audio',
            description: 'The audio recording of the entire episode',
            accept: 'audio/*' 
        }),
        defineField({
            name: 'epDesc',
            type: 'text',
            title: 'Episode description',
            description: 'What is this episode about?'
        }),
        defineField({
            name: 'epHosts',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    weak: true,
                    to: [{
                        type: 'person'
                    }]
                })
            ],
            title: 'Episode hosts',
            description: 'Who is featured in this episode?'
        }),
        defineField({
            name: 'epTopics',
            title: 'Episode topics',
            type: 'array',
            of: [
                defineArrayMember({
                    title: 'Topics covered',
                    type: 'reference',
                    weak: true,
                    to: [
                        {type: 'game'},
                        {type: 'platform'}
//                        {type: 'concept'}
                    ]
                })
            ],
            layout: 'tags',
            description: 'What topics are discussed in this episode?'
        })
    ]
})