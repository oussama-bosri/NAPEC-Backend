import StandBooking from '../models/StandBooking.js';

export const createStandBooking = async (req, res) => {
  try {
    const newStandBooking = new StandBooking(req.body);
    await newStandBooking.save();
    res.status(201).json({ message: 'Stand booking created successfully', booking: newStandBooking });
  } catch (error) {
    res.status(400).json({ message: 'Error creating stand booking', error: error.message });
  }
};

export const getAllStandBookings = async (req, res) => {
  try {
    const standBookings = await StandBooking.find();
    res.status(200).json(standBookings);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching stand bookings', error: error.message });
  }
};

console.log('Stand booking controller functions defined');