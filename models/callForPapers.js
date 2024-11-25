import mongoose from 'mongoose';

const callForPapersSchema = new mongoose.Schema({
  companyAddress: { type: String, required: true },
  companyWebsite: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  position: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  mobile: { type: String },
  description: { type: String, required: true },
  speakerBio: { type: String, required: true },
}, { collection: 'call_for_papers' }); 
const CallForPapers = mongoose.model('CallForPapers', callForPapersSchema, 'call_for_papers');

export default CallForPapers;
