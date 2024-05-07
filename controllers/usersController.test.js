const fs = require('fs').promises;
const { getAllUsers } = require('../controllers/usersController');
const mockData = require('../data/mockdata.json');

describe('getAllUsers function', () => {
  test('should return an array of users from data.json', async () => {
    // Mock the data read from the file
    const mockedData = JSON.stringify(mockData);
    jest.spyOn(fs, 'readFile').mockResolvedValue(mockedData);

    // Call the getAllUsers function
    const users = await getAllUsers();

    // Verify the result
    expect(users).toEqual(JSON.parse(mockedData));
  });

  test('should throw an error if reading data.json fails', async () => {
    // Mock an error when reading the file
    const mockError = new Error('Failed to read file');
    jest.spyOn(fs, 'readFile').mockRejectedValue(mockError);

    // Call the getAllUsers function and expect it to throw an error
    await expect(getAllUsers()).rejects.toThrow(mockError);
  });
});
