const express = require('express');
const router = express.Router();
const { getAllActivities } = require('../controllers/activitiesController');
const {
  filterActivitiesByTitle,
} = require('../controllers/filterActivitiesController');

// GET all activities
router.get('/activities', async (_req, res) => {
  try {
    const activities = await getAllActivities();
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/activities/search', async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ error: 'Title parameter is required' });
    }
    const filteredActivities = await filterActivitiesByTitle(title);
    res.json(filteredActivities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
