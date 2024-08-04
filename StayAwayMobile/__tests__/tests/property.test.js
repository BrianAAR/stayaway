const request = require('supertest');
const app = require('../server'); // Importa tu aplicación Express

describe('GET /api/properties', () => {
  it('should return all properties', async () => {
    const response = await request(app).get('/api/properties');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
