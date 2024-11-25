import express from 'express';
import { submitCallForPapers } from '../controllers/callForPapersController.js';

const router = express.Router();

// Use the submitCallForPapers controller function
router.post('/submit', submitCallForPapers);

// Export the router
export { router };