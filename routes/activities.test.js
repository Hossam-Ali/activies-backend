const express = require('express');
const request = require('supertest');
const router = require('../routes/activities');
const mockData = require('../data/mockdata.json');
const { getAllActivities } = require('../controllers/activitiesController');

// Mock the getAllActivities function
jest.mock('../controllers/activitiesController', () => ({
  getAllActivities: jest.fn(),
}));

describe('GET /activities', () => {
  it('should return all activities', async () => {
    // Mock the getAllActivities function to return sampleactivities
    getAllActivities.mockResolvedValueOnce(mockData);

    // Create an instance of the Express application
    const app = express();

    // Mount the router on the application instance
    app.use('/', router);

    // Send a GET request to the route
    const response = await request(app).get('/activities');

    // Verify the response
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
  });

  it('should handle errors', async () => {
    // Mock the getAllActivities function to throw an error
    const error = new Error('Internal Server Error');
    getAllActivities.mockRejectedValueOnce(error);

    // Create an instance of the Express application
    const app = express();

    // Mount the router on the application instance
    app.use('/', router);

    // Send a GET request to the route
    const response = await request(app).get('/activities');

    // Verify the response
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Internal Server Error' });
  });
});
