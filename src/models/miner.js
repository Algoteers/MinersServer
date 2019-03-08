import mongoose, { Schema } from 'mongoose';
import { MinerTypeEnum } from '../enums/MinerType';
import { MinerStateEnum } from '../enums/MinerState';

const minerSchema = new Schema({
  authId: {
    type: String,
    required: true,
  },
  minerType: {
    type: String,
    enum: MinerTypeEnum,
    required: true,
  },
  minerState: {
    type: String,
    enum: MinerStateEnum,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  minerAccountAddress: {
    type: String,
    required: true,
  },
  referralAccountAddress: {
    type: String,
    required: true,
  },
  minerBalance: {
    type: Number,
    required: true,
  },
});

const Miner = mongoose.model('Miner', minerSchema);

export default Miner;
