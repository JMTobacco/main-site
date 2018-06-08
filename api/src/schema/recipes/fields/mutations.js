import {GraphQLString, GraphQLInt} from 'graphql'

import RecipeType from '../type'
import {create, remove} from '../resolvers'

// recipe create
export const recipeCreate = {
  type: RecipeType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    recipe: {
      name: 'recipe',
      type: GraphQLString
    }
  },
  resolve: create
}

// recipe remove
export const recipeRemove = {
  type: RecipeType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}