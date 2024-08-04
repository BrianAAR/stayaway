const request = require('supertest');
const app = require('../server');

describe('Integration Test', () => {
  it('should create and then fetch a property', async () => {
    const newProperty = { name: 'Test Property', description: 'Test Description', price: 100, type: 'house', available: true };
    
    // Crear propiedad
    const createResponse = await request(app).post('/api/properties').send(newProperty);
    expect(createResponse.status).toBe(201);

    // Obtener propiedad
    const getResponse = await request(app).get(`/api/properties/${createResponse.body._id}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.name).toBe(newProperty.name);
  });
});
