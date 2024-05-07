const express = require('express');
const request = require('supertest');
const usersRouter = require('./routes/users');

describe('GET /api/v1/users', () => {
  it('should respond with status 200', async () => {
    const app = express();
    app.use('/api/v1/users', usersRouter);

    const response = await request(app).get('/api/v1/users');

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
