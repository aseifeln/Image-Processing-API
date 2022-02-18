import supertest from "supertest";
import routes from '../../routes/index';

const request = supertest(routes);
describe('Test main api endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    })
})