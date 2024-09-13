const request = require('supertest');
const app = require('/server'); // Path to your server file

describe('API Endpoints', () => {
    it('should return a list of expenses', async () => {
        const response = await request(app).get('/expenses/:userId');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});