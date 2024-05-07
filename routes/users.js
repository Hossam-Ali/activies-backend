const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/usersController');

// GET all users
router.get('/', async (_req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
