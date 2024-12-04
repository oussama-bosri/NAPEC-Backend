import MediaRegistration from '../models/MediaRegistration.js';

export const submitRegistration = async (req, res) => {
  try {
    const newRegistration = new MediaRegistration(req.body);
    const savedRegistration = await newRegistration.save();
    res.status(201).json({
      message: 'Registration submitted successfully',
      registration: savedRegistration
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await MediaRegistration.find();
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};