import { defineType, defineField, defineArrayMember } from "sanity"

export const personType = defineType({
    name: 'person',
    type: 'document',
    title: 'People',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Name'
      }),
      defineField({
        name: 'headshot',
        type: 'image',
        title: 'Picture',
        description: 'A photo or avatar for this person'
      }),
      defineField({
        name: 'bio',
        type: 'text',
        title: 'Biography',
        description: 'A little bit about this person'
      }),
      defineField({
        name: 'favGames',
        title: 'Favorite games',
        description: 'Some favorite games of this person',
        type: 'array',
        of: [
          defineArrayMember({
            type:'reference',
            weak: true,
            to: [{type: 'game'}]
          }), 
        ]
      }),
      defineField({
        name: 'ownedPlats',
        title: 'Owned platforms',
        description: 'What platforms does this person own?',
        type: 'array',
        of: [
          defineArrayMember({
            type: 'reference',
            weak: true,
            to: [{type: 'platform'}]
          })
        ]
      }),
      defineField({
        name: 'bday',
        type: 'date',
        title: 'Birthday'
      }),
      defineField({
        name: 'socialLinks',
        title: 'Social handles',
        description: 'Where can people find you?',
        type: 'array',
        of: [
          defineArrayMember({
            name: 'twitter',
            type: 'string',
            title: 'Twitter'
          }),
          defineArrayMember({
            name: 'insta',
            type: 'string',
            title: 'Instagram'
          }),
          defineArrayMember({
            name: 'xboxtag',
            type: 'string',
            title: 'Gamertag (Xbox)'
          }),
          defineArrayMember({
            name: 'steamName',
            type: 'string',
            title: 'Steam'
          })
        ]
      })
//      defineField({
//        name: 'age',
//        type: 'number',
//        title: 'Age',
//        hidden: 'true'
//      }),
    ]
  })