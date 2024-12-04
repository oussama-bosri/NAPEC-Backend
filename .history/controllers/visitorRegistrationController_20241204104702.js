import VisitorRegistration from '../models/visitorRegistration.js';

export const submitVisitorRegistration = async (req, res) => {
  try {
    const {
      company,
      companyAddress,
      companyWebsite,
      firstName,
      lastName,
      position,
      email,
      phone,
      mobile
    } = req.body;

    // Log the incoming data
    console.log('Data being saved:', req.body);

    // Validate the incoming data
    if (!company || !firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    // Create and save the new visitor registration entry
    const visitorRegistrationEntry = new VisitorRegistration({
      company,
      companyAddress,
      companyWebsite,
      firstName,
      lastName,
      position,
      email,
      phone,
      mobile,
      photoPath: req.file ? req.file.path : null
    });

    // Save to database
    await visitorRegistrationEntry.save();
    console.log('Data saved successfully');
    res.status(201).json({
      message: 'Visitor registration successful',
      entryId: visitorRegistrationEntry._id
    });

  } catch (error) {
    console.error('Error in submitVisitorRegistration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

