const fs = require('fs').promises;
const { getAllActivities } = require('../controllers/activitiesController');
const mockData = require('../data/mockdata.json');

describe('getAllActivities function', () => {
  test('should return an array of activities from data.json', async () => {
    // Mock the data read from the file
    const mockedData = JSON.stringify(mockData);
    jest.spyOn(fs, 'readFile').mockResolvedValue(mockedData);

    // Call the getAllActivities function
    const activities = await getAllActivities();

    // Verify the result
    expect(activities).toEqual(JSON.parse(mockedData));
  });

  test('should throw an error if reading data.json fails', async () => {
    // Mock an error when reading the file
    const mockError = new Error('Failed to read file');
    jest.spyOn(fs, 'readFile').mockRejectedValue(mockError);

    // Call the getAllActivities function and expect it to throw an error
    await expect(getAllActivities()).rejects.toThrow(mockError);
  });
});
