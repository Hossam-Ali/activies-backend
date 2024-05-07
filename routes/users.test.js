const express = require('express');
const request = require('supertest');
const router = require('../routes/users');
const mockData = require('../data/mockdata.json');
const { getAllUsers } = require('../controllers/usersController');

// Mock the getAllUsers function
jest.mock('../controllers/usersController', () => ({
  getAllUsers: jest.fn(),
}));

// Sample user data for testing

describe('GET /users', () => {
  it('should return all users', async () => {
    // Mock the getAllUsers function to return sampleUsers
    getAllUsers.mockResolvedValueOnce(mockData);

    // Create an instance of the Express application
    const app = express();

    // Mount the router on the application instance
    app.use('/users', router);

    // Send a GET request to the route
    const response = await request(app).get('/users');

    // Verify the response
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
  });

  it('should handle errors', async () => {
    // Mock the getAllUsers function to throw an error
    const error = new Error('Internal Server Error');
    getAllUsers.mockRejectedValueOnce(error);

    // Create an instance of the Express application
    const app = express();

    // Mount the router on the application instance
    app.use('/users', router);

    // Send a GET request to the route
    const response = await request(app).get('/users');

    // Verify the response
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Internal Server Error' });
  });
});
