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
    minerType: { type: GraphQLString },
    minerState: { type: GraphQLString },
    category: { type: GraphQLString },
    minerAccountAddress: { type: GraphQLString },
    referralAccountAddress: { type: GraphQLString },
    minerBalance: { type: GraphQLFloat },
  }),
});

export default MinerType;
