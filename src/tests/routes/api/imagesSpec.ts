import supertest from "supertest";
import images from '../../../routes/api/images';

const request = supertest(images);
describe('Test images endpoint responses', () => {
    it('Returns status code 200 given correct input', async () => {
        const response = await request.get('/api/images?filename=fjord&width=200&height=200');
        expect(response.status).toBe(200);
    })
    it('Returns status code 400 for missing filename', async () => {
        const response = await request.get('/api/images?fwidth=200&height=200');
        expect(response.status).toBe(400);
    })
    it('Returns status code 400 for missing image width', async () => {
        const response = await request.get('/api/images?filename=fjord&height=200');
        expect(response.status).toBe(400);
    })
    it('Returns status code 400 for missing image height', async () => {
        const response = await request.get('/api/images?filename=fjord&width=200');
        expect(response.status).toBe(400);
    })
})