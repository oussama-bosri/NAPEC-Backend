import express from 'express';

const router = express.Router();

// Define your routes
router.post('/submit', (req, res) => {
  const requiredFields = [
    "companyAddress",
    "companyWebsite",
    "firstName",
    "lastName",
    "position",
    "email",
    "phone",
    "mobile",
    "description",
    "speakerBio"
  ];

  const missingFields = requiredFields.filter(field => !req.body[field]);
  if (missingFields.length > 0) {
    return res.status(400).json({
      error: "Required fields are missing",
      missingFields
    });
  }

  // Process and save data here...
  res.status(201).json({ message: "Submission successful" });
});

// Export the router
export { router };