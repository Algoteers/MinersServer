import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat
} from 'graphql';

const MinerType = new GraphQLObjectType({
  name: 'Miner',
  fields: () => ({
    id: { type: GraphQLID },
    address: { type: GraphQLString },
    type: { type: GraphQLString },
    state: { type: GraphQLString },
    category: { type: GraphQLString },
    assignedMinerAddress: { type: GraphQLString },
    assignedReferralAddress: { type: GraphQLString },    
    name: { type: GraphQLString },
    authId: { type: GraphQLString },
  }),
});

export default MinerType;
