import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

const RecipeType = new GraphQLObjectType({
  name: 'recipe',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    recipe: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default RecipeType