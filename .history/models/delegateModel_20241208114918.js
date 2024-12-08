import mongoose from 'mongoose';

const delegateSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  website: { type: String },
  ticketType: { type: String, required: true, enum: ['VIP Ticket', 'Freedom Ticket'] },
  acceptPolicy: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Delegate = mongoose.model('Delegate', delegateSchema);

export default Delegate;