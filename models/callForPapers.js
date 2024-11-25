import mongoose from 'mongoose';

const callForPapersSchema = new mongoose.Schema({
  companyAddress: { type: String, required: true },
  companyWebsite: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  mobile: { type: String, required: true },
  description: { type: String, required: true },
  speakerBio: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, {
  collection: 'call_for_papers', 
});

const CallForPapers = mongoose.model('CallForPapers', callForPapersSchema);

export default CallForPapers;
