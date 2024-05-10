const { filterActivitiesByTitle } = require('./filterActivitiesController');

describe('filterActivitiesByTitle', () => {
  it('should return activities with matching title', async () => {
    const title = 'German Tour: Parliament Quarter & Reichstag glass dome';
    const filteredActivities = await filterActivitiesByTitle(title);
    expect(filteredActivities).toHaveLength(1);
  });

  it('should return an empty array if no activities match the title', async () => {
    const title = 'Non-existent Title';
    const filteredActivities = await filterActivitiesByTitle(title);
    expect(filteredActivities).toHaveLength(0);
  });
});
