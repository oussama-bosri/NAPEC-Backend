import express from 'express';
import * as mediaRegistrationController from '../controllers/mediaRegistrationController.js';

const router = express.Router();

router.post('/register', mediaRegistrationController.submitRegistration);
router.get('/registrations', mediaRegistrationController.getAllRegistrations);

export { router };