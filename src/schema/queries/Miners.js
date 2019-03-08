import { GraphQLList } from 'graphql';
import { MinerType } from '../types';
import { Miner } from '../../models';
import logger from '../../utils/logger'

const args = {};

const resolve = (parent, args, context) => {
  logger.debug('Listing miners.')

  return Miner.find().sort({_id: -1})
  
}

const query = {
  miners: {
    type: new GraphQLList(MinerType),
    args,
    resolve,
  },
};

export default query;
