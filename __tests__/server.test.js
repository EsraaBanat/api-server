'use strict';
const { app } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(app);

const { db } = require('../src/models/index');


beforeAll(async () => {
    await db.sync();
});

describe('Web server', () => {
    it('404 on a bad route', async () => {
        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);
    });

    it('404 on a bad method', async () => {
        const response = await mockRequest.put('/food');
        expect(response.status).toBe(404);
    });


    it('Create a record using POST', async () => {
        const response = await mockRequest.post('/food').send({
            name: 'shihab',
        });
        expect(response.status).toBe(201);
    });


    it('Read a list of records using GET', async () => {
        const response = await mockRequest.get('/food');
        expect(response.status).toBe(200);

    });

    it('Read a record using GET', async () => {
        const response = await mockRequest.get('/food/1');
        expect(response.status).toBe(200);

    });

    it('Update a record using PUT', async () => {
        const response = await mockRequest.put('/food/1');
        expect(response.status).toBe(201);
    });

    it('Destroy a record using DELETE', async () => {
        const response = await mockRequest.delete('/food/1');
        expect(response.status).toBe(204);
    });
});

afterAll(async () => {
    await db.drop();
});