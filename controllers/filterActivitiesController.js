const fs = require('fs').promises;

// Filter activities by title
const filterActivitiesByTitle = async (title) => {
  try {
    // Read activities data from file
    const data = await fs.readFile('data/data.json');
    const activities = JSON.parse(data);

    // Filter activities based on title
    const filteredActivities = activities.filter((activity) =>
      activity.title.toLowerCase().includes(title.toLowerCase())
    );
    return filteredActivities;
  } catch (error) {
    throw error;
  }
};

module.exports = { filterActivitiesByTitle };
