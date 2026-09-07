import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
  },
  pageVisited: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

VisitorSchema.index({ timestamp: -1 });

const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);

export default Visitor;
