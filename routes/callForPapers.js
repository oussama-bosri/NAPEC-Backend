import express from 'express';
import { submitCallForPapers } from '../controllers/callForPapersController.js';

export const router = express.Router();

router.post('/submit', submitCallForPapers);

console.log('Call for papers routes registered.');