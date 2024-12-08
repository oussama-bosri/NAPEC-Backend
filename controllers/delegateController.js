import Delegate from '../models/delegateModel.js';

export const registerDelegate = async (req, res) => {
  try {
    const delegates = req.body;
    const registeredDelegates = await Delegate.create(delegates);
    res.status(201).json({
      success: true,
      message: 'Delegates registered successfully',
      data: registeredDelegates
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error registering delegates',
      error: error.message
    });
  }
};

export const getAllDelegates = async (req, res) => {
  try {
    const delegates = await Delegate.find();
    res.status(200).json({
      success: true,
      data: delegates
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error fetching delegates',
      error: error.message
    });
  }
};