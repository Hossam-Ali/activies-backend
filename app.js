const express = require('express');
const cors = require('cors');
const app = express();
const activitiesRouter = require('./routes/activities');

// Allow requests from all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/v1/activities', activitiesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
