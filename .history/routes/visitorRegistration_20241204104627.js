import express from 'express';
import { submitVisitorRegistration } from '../controllers/visitorRegistrationController.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Define the route for submitting visitor registration
router.post('/submit', upload.single('photo'), submitVisitorRegistration);

export { router };