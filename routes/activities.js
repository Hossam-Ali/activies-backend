const express = require('express');
const router = express.Router();
const { getAllActivities } = require('../controllers/activitiesController');

// GET all activities
router.get('/', async (_req, res) => {
  try {
    const activities = await getAllActivities();
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
