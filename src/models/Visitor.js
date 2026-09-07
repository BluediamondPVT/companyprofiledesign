import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
    index: true,
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
  visitCount: {
    type: Number,
    default: 1,
  },
});

VisitorSchema.index({ ipAddress: 1 });
VisitorSchema.index({ timestamp: -1 });

const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);

export default Visitor;
