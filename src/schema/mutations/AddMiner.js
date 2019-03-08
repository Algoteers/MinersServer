import { AuthenticationError } from '../../errors';
import { MinerType } from '../types';
import { Miner } from '../../models';
import { MinerInputType } from '../types/input';

export const args = {
  miner: { type: MinerInputType },
};

const resolve = (parent, { miner }, context) => {
 
  if (!context.userId || context.userId !== process.env.AUTHORIZED_CLIENT) {
    throw new AuthenticationError();
  }

  const newMiner = new Miner(miner);

  return new Promise((res, rej) => {
    newMiner.save((err) => {
      if (err) {
        rej(err);
        return;
      }
      res(newMiner);
    });
  });
};

const mutation = {
  addMiner: {
    type: MinerType,
    args,
    resolve,
  },
};

export default mutation;
