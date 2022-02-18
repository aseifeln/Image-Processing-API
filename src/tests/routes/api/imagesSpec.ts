import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);
describe('Test images endpoint responses', () => {
    it('Returns status code 200 given correct input', async () => {
        const response = await request.get(
            '/api/images?filename=fjord&width=200&height=200'
        );
        expect(response.status).toBe(200);
    });
    it('Returns status code 400 for missing filename', async () => {
        const response = await request.get('/api/images?fwidth=200&height=200');
        expect(response.status).toBe(400);
    });
    it('Returns status code 400 for missing image width', async () => {
        const response = await request.get(
            '/api/images?filename=fjord&height=200'
        );
        expect(response.status).toBe(400);
    });
    it('Returns status code 400 for missing image height', async () => {
        const response = await request.get(
            '/api/images?filename=fjord&width=200'
        );
        expect(response.status).toBe(400);
    });
    it('Returns status code 404 for not finding the image', async () => {
        const response = await request.get(
            '/api/images?filename=myimage&width=200&height=300'
        );
        expect(response.status).toBe(404);
    });
});
