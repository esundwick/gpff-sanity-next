/* eslint-disable simple-import-sort/imports */
import { gameType } from './games.js'
import { genreType } from './genres.js'
import { platformType } from './platforms.js'
import { personType } from './people.js'
import { postType } from './posts.js'
import { episodeType } from './episodes.js'

export const schemaTypes = [  
    postType, 
    episodeType,
    personType,
    gameType, 
    genreType, 
    platformType ]