import mongoose from 'mongoose';

const BlockedIPSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  blockedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.BlockedIP || mongoose.model('BlockedIP', BlockedIPSchema);
