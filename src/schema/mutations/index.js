import {
  GraphQLObjectType,
} from 'graphql';

import AddMinerMutation from './AddMiner';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: Object.assign(
    AddMinerMutation,
  ),
});

export default Mutation;
