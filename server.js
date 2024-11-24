import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as callForPapersRouter } from './routes/callForPapers.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/call-for-papers', callForPapersRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// For demonstration purposes, let's create a simple in-memory storage
global.submissions = [];

console.log('Server setup complete. Routes available:');
console.log('POST /api/call-for-papers/submit');