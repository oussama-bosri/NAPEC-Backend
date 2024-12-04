import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import connectDB from './models/db.js';
import { router as callForPapersRouter } from './routes/callForPapers.js';
import { router as mediaRegistrationRouter } from './routes/mediaRegistrationRoutes.js';

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/call-for-papers', callForPapersRouter);
app.use('/api/media', mediaRegistrationRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});