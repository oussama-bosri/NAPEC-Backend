export const submitCallForPapers = (req, res) => {
    try {
      const submissionData = req.body;
      
      // Validate the incoming data
      if (!submissionData.title || !submissionData.abstract) {
        return res.status(400).json({ error: 'Title and abstract are required fields' });
      }
  
      // In a real application, you would save this to a database
      global.submissions.push(submissionData);
  
      console.log('New submission received:', submissionData);
      console.log('Total submissions:', global.submissions.length);
  
      res.status(201).json({ message: 'Paper submission successful', submissionId: global.submissions.length });
    } catch (error) {
      console.error('Error in submitCallForPapers:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };