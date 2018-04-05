import request from 'supertest';
import app from '../dist/app.js';

describe('GET /api', () => {
    it('should return properly', async () => {
        await request(app).get('/api').expect(200);
    });
});
