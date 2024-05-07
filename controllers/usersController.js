const fs = require('fs').promises;

// Get all users
const getAllUsers = async () => {
  try {
    const data = await fs.readFile('data/data.json');
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllUsers };
