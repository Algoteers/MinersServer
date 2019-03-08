import { GraphQLList } from 'graphql';
import { MinerType } from '../types';
import { Miner } from '../../models';
import logger from '../../utils/logger'
import { AuthenticationError } from '../../errors'

const args = {};

const resolve = (parent, args, context) => {
  logger.debug('Listing miners by user.')

  if (!context.userId) {
    throw new AuthenticationError()
  }

  return Miner.find({
    authId: context.userId
  }).sort({_id: -1})

}

const query = {
  minersByUser: {
    type: new GraphQLList(MinerType),
    args,
    resolve,
  },
};

export default query;
