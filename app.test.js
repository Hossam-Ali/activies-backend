const express = require('express');
const request = require('supertest');
const activitiesRouter = require('./routes/activities');

describe('GET /api/v1/activities', () => {
  it('should respond with status 200', async () => {
    const app = express();
    app.use('/api/v1/activities', activitiesRouter);

    const response = await request(app).get('/api/v1/activities');

    expect(response.status).toBe(200);
  });
});

describe('Error handling middleware', () => {
  it('should respond with status 500 for unhandled errors', async () => {
    const app = express();
    app.use((_req, _res, next) => {
      next(new Error('Unhandled error'));
    });
    app.use((err, _req, res, _next) => {
      res.status(500).json({ error: 'Internal Server Error' });
    });

    const response = await request(app).get('/');

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Internal Server Error');
  });
});
