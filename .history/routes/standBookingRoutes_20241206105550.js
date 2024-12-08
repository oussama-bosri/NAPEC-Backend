import express from 'express';
import { createStandBooking, getAllStandBookings } from '../controllers/standBookingController.js';

const router = express.Router();

router.post('/', createStandBooking);

export default router;

console.log('Stand booking routes defined');