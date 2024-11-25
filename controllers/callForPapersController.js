import CallForPapers from '../models/callForPapers.js';

export const submitCallForPapers = async (req, res) => {
  try {
    const {
      companyAddress,
      companyWebsite,
      firstName,
      lastName,
      position,
      email,
      phone,
      mobile,
      description,
      speakerBio
    } = req.body;

    // Log the incoming data
    console.log('Data being saved:', req.body);

    // Validate the incoming data
    if (!companyAddress || !companyWebsite || !firstName || !email || !description || !speakerBio) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    // Create and save the new call for papers entry
    const callForPapersEntry = new CallForPapers({
      companyAddress,
      companyWebsite,
      firstName,
      lastName,
      position,
      email,
      phone,
      mobile,
      description,
      speakerBio
    });

    // Save to database
    await callForPapersEntry.save();
    console.log('Data saved successfully');
    res.status(201).json({
      message: 'Submission successful',
      entryId: callForPapersEntry._id
    });

  } catch (error) {
    console.error('Error in submitCallForPapers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};