import express from 'express';
import { registerDelegate, getAllDelegates } from '../controllers/delegateController.js';

const router = express.Router();

router.post('/register-delegate', registerDelegate);
router.get('/delegates', getAllDelegates);

export default router;