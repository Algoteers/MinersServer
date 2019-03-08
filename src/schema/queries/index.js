import {
  GraphQLObjectType,
} from 'graphql';

import MinersQuery from './Miners';
import MinersByUserQuery from './MinersByUser';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: Object.assign(
    MinersQuery,
    MinersByUserQuery,
  ),
});

export default RootQuery;
