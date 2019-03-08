import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';

const Type = new GraphQLInputObjectType({
  name: 'MinerInput',
  description: 'Payload for miner input',
  fields: () => ({
    address: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    state: { type: new GraphQLNonNull(GraphQLString) },
    category: { type: new GraphQLNonNull(GraphQLString) },
    assignedMinerAddress: { type: new GraphQLNonNull(GraphQLString) },
    assignedReferralAddress: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    authId: { type: GraphQLString },
  }),
});

export default Type;
