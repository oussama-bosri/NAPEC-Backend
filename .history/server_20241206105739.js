import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import connectDB from './models/db.js';
import { router as callForPapersRouter } from './routes/callForPapers.js';
import { router as mediaRegistrationRouter } from './routes/mediaRegistrationRoutes.js';
import { router as visitorRegistrationRouter } from './routes/visitorRegistration.js';
import standBookingRoutes from './routes/standBookingRoutes.js';
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/call-for-papers', callForPapersRouter);
app.use('/api/media', mediaRegistrationRouter);
app.use('/api/visitor-registration', visitorRegistrationRouter);
app.use('/api/stand-booking', standBookingRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

