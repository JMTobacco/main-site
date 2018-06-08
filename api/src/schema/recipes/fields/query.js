import {GraphQLInt, GraphQLList} from 'graphql'

import RecipeType from '../type'
import {getAll, getById} from '../resolvers'

// recipes All
export const recipes = {
  type: new GraphQLList(RecipeType),
  resolve: getAll
}

// recipe By ID
export const recipe = {
  type: RecipeType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: getById
}