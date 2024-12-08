import mongoose from 'mongoose';

const standBookingSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  website: String,
  phone: { type: String, required: true },
  mobile: String,
  companyPresentation: String,
  standType: {
    type: [String],
    enum: ['equipped', 'halfEquipped', 'empty'],
    required: true
  },
  acceptConditions: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

const StandBooking = mongoose.model('StandBooking', standBookingSchema);

export default StandBooking;

console.log('StandBooking model defined');