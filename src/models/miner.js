import mongoose, { Schema } from 'mongoose';
import { MinerTypeEnum } from '../enums/MinerType';
import { MinerStateEnum } from '../enums/MinerState';

const minerSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: MinerTypeEnum,
    required: true,
  },
  state: {
    type: String,
    enum: MinerStateEnum,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  assignedMinerAddress: {
    type: String,
    required: true,
  },
  assignedReferralAddress: {
    type: String,
    required: true,
  },  
  name: {
    type: String,
  },
  authId: {
    type: String
  },
});

const Miner = mongoose.model('Miner', minerSchema);

export default Miner;
