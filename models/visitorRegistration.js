import mongoose from 'mongoose';

const visitorRegistrationSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  companyAddress: String,
  companyWebsite: String,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  position: String,
  email: {
    type: String,
    required: true
  },
  phone: String,
  mobile: String,
  photoPath: String,
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

const VisitorRegistration = mongoose.model('VisitorRegistration', visitorRegistrationSchema);

export default VisitorRegistration;

