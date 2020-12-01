const testHelper = require('../lib/core/test-helper');
const Symptom = require('../lib/models/symptom').model;

/** @type {import('@hapi/hapi').Server} */
let server;

beforeAll(async () => {
    server = await testHelper.setupFunctionalTest();
    await Symptom.collection.deleteMany({});
    await Symptom.collection.insertMany(require('./test-data/symptoms'));
});

afterAll(async () => {
    await testHelper.teardownFunctionalTest();
});

describe('GET /', () => {
    test('responds with 200 getting all the symptoms', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/symptoms',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('count');
        expect(res.result).toHaveProperty('data');
        expect(Array.isArray(res.result.data)).toBe(true);
        expect(res.result.data[0]).toHaveProperty('_id', '5fbe53388309cb5f78b99f37');
        expect(res.result.data[0]).toHaveProperty('name', 'Fever');
        expect(res.result.data[0]).toHaveProperty('severity', 3);
    });
});

describe('GET Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/symptoms',
        });
        expect(res.statusCode).toBe(401);
    });
});

describe('POST /', () => {
    test('responds with 200 adding a new symptom', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/symptoms',
            headers: testHelper.authHeaders,
            payload: {
                name: 'Wet Cough',
                severity: 3
            },
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('_id');
        expect(res.result).toHaveProperty('name', 'Wet Cough');
        expect(res.result).toHaveProperty('severity', 3);
    });
});

describe('POST / Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/symptoms',
            payload: {
                name: 'Wet Cough',
                severity: 3
            },
        });
        expect(res.statusCode).toBe(401);
    });

    test('Invalid symptom name responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/symptoms',
            headers: testHelper.authHeaders,
            payload: {
                name: 1233456,
                severity: 3
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid symptom severity responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/symptoms',
            headers: testHelper.authHeaders,
            payload: {
                name: 'Wet Cough',
                severity: 6
            },
        });
        expect(res.statusCode).toBe(400);
    });
});

describe('PUT /symptoms', () => {
    test('responds with 200', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/symptoms/Fever',
            headers: testHelper.authHeaders,
            payload: {
                name: 'High Fever',
                severity: 3
            },
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('name', 'High Fever');
        expect(res.result).toHaveProperty('severity', 3);
    });
});

describe('PUT /symptoms Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/symptoms/Fever',
            payload: {
                name: 'High Fever',
            },
        });
        expect(res.statusCode).toBe(401);
    });

    test('Invalid symptom name responds with 404', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/symptoms/high Fever',
            headers: testHelper.authHeaders,
            payload: {
                name: 'High Fever',
            },
        });
        expect(res.statusCode).toBe(404);
    });

    test('Invalid updated symptom name responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/symptoms/Fever',
            headers: testHelper.authHeaders,
            payload: {
                name: true,
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid updated symptom severity responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/symptoms/Fever',
            headers: testHelper.authHeaders,
            payload: {
                name: 'High Fever',
                severity: 6
            },
        });
        expect(res.statusCode).toBe(400);
    });
});

describe('DELETE /', () => {
    test('responds with 200', async () => {
        const res = await server.inject({
            method: 'delete',
            url: '/symptoms/Cough',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(res.result).toBe('Deleted a symptom: Cough')
    });
});

describe('DELETE / Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'delete',
            url: '/symptoms/Cough',
        });
        expect(res.statusCode).toBe(401);
    });

    test('Invalid symptom name responds with 404', async () => {
        const res = await server.inject({
            method: 'delete',
            url: '/symptoms/Wet Fever',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(404);
    });
});