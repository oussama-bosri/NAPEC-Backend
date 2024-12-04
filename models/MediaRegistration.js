import mongoose from 'mongoose';

const MediaRegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  organisation: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: String,
  message: String
}, { timestamps: true });

export default mongoose.model('MediaRegistration', MediaRegistrationSchema);