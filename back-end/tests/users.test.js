const testHelper = require('../lib/core/test-helper');
const User = require('../lib/models/user').model;

/** @type {import('@hapi/hapi').Server} */
let server;

beforeAll(async () => {
    server = await testHelper.setupFunctionalTest();
    await User.collection.deleteMany({});
    await User.collection.insertMany(require('./test-data/users'));
});

afterAll(async () => {
    await testHelper.teardownFunctionalTest();
});

describe('GET /', () => {
    test('responds with 200 getting all the users', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('count');
        expect(res.result).toHaveProperty('data');
        expect(Array.isArray(res.result.data)).toBe(true);
        expect(res.result.data[0]).toHaveProperty('_id');
        expect(res.result.data[0]).toHaveProperty('username', 'robert.kopec');
        expect(res.result.data[0]).toHaveProperty('email', 'robert.kopec@valhalla.com');
        expect(res.result.data[0]).toHaveProperty('password');
        expect(res.result.data[0]).toHaveProperty('accountType', 'admin');
        expect(res.result.data[0]).toHaveProperty('symptoms');
        expect(Array.isArray(res.result.data[0].symptoms)).toBe(true);
    });

    test('responds with 200 when providing a username', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users/robert.kopec',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('count');
        expect(res.result).toHaveProperty('data');
        expect(Array.isArray(res.result.data)).toBe(true);
        expect(res.result.data.length).toBe(1);
        expect(res.result.data[0]).toHaveProperty('_id');
        expect(res.result.data[0]).toHaveProperty('username', 'robert.kopec');
        expect(res.result.data[0]).toHaveProperty('email', 'robert.kopec@valhalla.com');
        expect(res.result.data[0]).toHaveProperty('password');
        expect(res.result.data[0]).toHaveProperty('accountType', 'admin');
        expect(res.result.data[0]).toHaveProperty('symptoms');
        expect(Array.isArray(res.result.data[0].symptoms)).toBe(true);
    });

    test('responds with 200 when querying account type', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users?accountType=admin',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('count');
        expect(res.result).toHaveProperty('data');
        expect(Array.isArray(res.result.data)).toBe(true);
        expect(res.result.data.length).toBe(4);
        expect(res.result.data[1]).toHaveProperty('_id');
        expect(res.result.data[1]).toHaveProperty('username', 'harry.rhodes');
        expect(res.result.data[1]).toHaveProperty('email', 'harry.rhodes@valhalla.com');
        expect(res.result.data[1]).toHaveProperty('password');
        expect(res.result.data[1]).toHaveProperty('accountType', 'admin');
        expect(res.result.data[1]).toHaveProperty('symptoms');
        expect(Array.isArray(res.result.data[0].symptoms)).toBe(true);
    });
});

describe('GET Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users',
        });
        expect(res.statusCode).toBe(401);
    });

    test('Invalid account type responds with 400', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users?accountType=god',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(400);
    });
});

describe('GET /validate', () => {
    test('responds with 200', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users/validate',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('usernames');
        expect(Array.isArray(res.result.usernames)).toBe(true);
        expect(res.result).toHaveProperty('emails');
        expect(Array.isArray(res.result.emails)).toBe(true);
        expect(res.result.usernames.length).toBe(6);
        expect(res.result.emails.length).toBe(6);
        expect(res.result.usernames[0]).toBe('robert.kopec');
    });
});

describe('GET /validate Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users/validate',
        });
        expect(res.statusCode).toBe(401);
    });
});

describe('GET /login', () => {
    test('responds with 200 using username', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users/login/robert.kopec?password=robert',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('status', 'Success');
        expect(res.result).toHaveProperty('user');
        expect(typeof res.result.user).toBe('object');
        expect(res.result.user).toHaveProperty('firstName', 'Robert');
    });

    test('responds with 200 using email', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users/login/harry.rhodes@valhalla.com?password=harry',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('status', 'Success');
        expect(res.result).toHaveProperty('user');
        expect(typeof res.result.user).toBe('object');
        expect(res.result.user).toHaveProperty('firstName', 'Harry');
    });

    test('responds with 200 providing incorrect username', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users/login/robert.kopek?password=robert',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('status', 'Invalid Username/Email');
        expect(res.result).toHaveProperty('user');
        expect(typeof res.result.user).toBe('object');
    });

    test('responds with 200 providing incorrect password', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users/login/robert.kopec?password=password123',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('status', 'Incorrect Password');
        expect(res.result).toHaveProperty('user');
        expect(typeof res.result.user).toBe('object');
    });
});

describe('GET /validate Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users/login/robert.kopec?password=robert',
        });
        expect(res.statusCode).toBe(401);
    });

    test('Missing username responds with 400', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users/login?password=robert',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(400);
    });

    test('Missing password responds with 400', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/users/login/robert.kopec',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(400);
    });
});

describe('POST /', () => {
    test('responds with 200', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            headers: testHelper.authHeaders,
            payload: {
                username: 'test username',
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                accountType: 'patient',
                role: {},
                patientDetails: {},
                symptoms: [],
            },
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('_id');
        expect(res.result).toHaveProperty('username', 'test username');
        expect(res.result).toHaveProperty('password');
        expect(res.result).toHaveProperty('email', 'test email');
        expect(res.result).toHaveProperty('firstName', 'test first name');
        expect(res.result).toHaveProperty('lastName', 'test last name');
        expect(res.result).toHaveProperty('accountType', 'patient');
        expect(typeof res.result.role).toBe('object');
        expect(typeof res.result.patientDetails).toBe('object');
        expect(Array.isArray(res.result.symptoms)).toBe(true);
    });
});

describe('POST / Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            payload: {
                username: 'test username',
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                accountType: 'patient',
                role: {},
                patientDetails: {},
                symptoms: [],
            },
        });
        expect(res.statusCode).toBe(401);
    });

    test('Invalid username responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            headers: testHelper.authHeaders,
            payload: {
                // username: 'test username',
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                accountType: 'patient',
                role: {},
                patientDetails: {},
                symptoms: [],
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid password responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            headers: testHelper.authHeaders,
            payload: {
                username: 'test username',
                // password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                accountType: 'patient',
                role: {},
                patientDetails: {},
                symptoms: [],
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid email responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            headers: testHelper.authHeaders,
            payload: {
                username: 'test username',
                password: 'test password',
                // email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                accountType: 'patient',
                role: {},
                patientDetails: {},
                symptoms: [],
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid first name responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            headers: testHelper.authHeaders,
            payload: {
                username: 'test username',
                password: 'test password',
                email: 'test email',
                // firstName: 'test first name',
                lastName: 'test last name',
                accountType: 'patient',
                role: {},
                patientDetails: {},
                symptoms: [],
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid last name responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            headers: testHelper.authHeaders,
            payload: {
                username: 'test username',
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                // lastName: 'test last name',
                accountType: 'patient',
                role: {},
                patientDetails: {},
                symptoms: [],
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid account type responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            headers: testHelper.authHeaders,
            payload: {
                username: 'test username',
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                accountType: 'god',
                role: {},
                patientDetails: {},
                symptoms: [],
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid role responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            headers: testHelper.authHeaders,
            payload: {
                username: 'test username',
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                accountType: 'patient',
                role: 'hello',
                patientDetails: {},
                symptoms: [],
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid patient details responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            headers: testHelper.authHeaders,
            payload: {
                username: 'test username',
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                accountType: 'patient',
                role: {},
                patientDetails: 'hello',
                symptoms: [],
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid symptoms responds with 400', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/users',
            headers: testHelper.authHeaders,
            payload: {
                username: 'test username',
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                accountType: 'patient',
                role: {},
                patientDetails: {},
                symptoms: 'hello',
            },
        });
        expect(res.statusCode).toBe(400);
    });
});

describe('PUT /symptoms', () => {
    test('responds with 200', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/symptoms/adam.jones',
            headers: testHelper.authHeaders,
            payload: {
                symptoms: [
                    { name: 'Dry Cough', comment: '' }
                ]
            }
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('_id');
        expect(res.result).toHaveProperty('username', 'adam.jones');
        expect(Array.isArray(res.result.symptoms)).toBe(true);
        expect(res.result.symptoms.length).toBe(1);
        expect(Array.isArray(res.result.symptoms[0].details)).toBe(true);
        expect(res.result.symptoms[0].details.length).toBe(1);
        expect(res.result.symptoms[0].details[0]).toHaveProperty('name', 'Dry Cough');
    });
});

describe('PUT /symptoms Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/symptoms',
        });
        expect(res.statusCode).toBe(401);
    });

    test('Invalid username responds with 404', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/symptoms/adam.roberts',
            headers: testHelper.authHeaders,
            payload: {
                symptoms: [
                    { name: 'Dry Cough', comment: '' }
                ]
            }
        });
        expect(res.statusCode).toBe(404);
    });

    test('Username of an admin responds with 406', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/symptoms/robert.kopec',
            headers: testHelper.authHeaders,
            payload: {
                symptoms: [
                    { name: 'Dry Cough', comment: '' }
                ]
            }
        });
        expect(res.statusCode).toBe(406);
    });

    test('Invalid symptoms responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/symptoms/adam.jones',
            headers: testHelper.authHeaders,
            payload: {
                symptoms: { name: 'Dry Cough', comment: '' }
            }
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid symptoms name responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/symptoms/adam.jones',
            headers: testHelper.authHeaders,
            payload: {
                symptoms: [
                    { name: true, comment: '' }
                ]
            }
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid symptoms comment responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/symptoms/adam.jones',
            headers: testHelper.authHeaders,
            payload: {
                symptoms: [
                    { name: 'Dry Cough', comment: 123456 }
                ]
            }
        });
        expect(res.statusCode).toBe(400);
    });
});

describe('PUT /', () => {
    test('responds with 200 updating account details', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/robert.kopec',
            headers: testHelper.authHeaders,
            payload: {
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                role: {},
                patientDetails: {},
            },
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.result).toBe('object');
        expect(res.result).toHaveProperty('_id');
        expect(res.result).toHaveProperty('username', 'robert.kopec');
        expect(res.result).toHaveProperty('password');
        expect(res.result).toHaveProperty('email', 'test email');
        expect(res.result).toHaveProperty('firstName', 'test first name');
        expect(res.result).toHaveProperty('lastName', 'test last name');
        expect(typeof res.result.role).toBe('object');
        expect(typeof res.result.patientDetails).toBe('object');
    });
});

describe('PUT / Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/robert.kopec',
        });
        expect(res.statusCode).toBe(401);
    });

    test('Invalid username responds with 404', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/robert.jones',
            headers: testHelper.authHeaders,
            payload: {
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                role: {},
                patientDetails: {},
            },
        });
        expect(res.statusCode).toBe(404);
    });

    test('Invalid password responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/robert.kopec',
            headers: testHelper.authHeaders,
            payload: {
                password: true,
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                role: {},
                patientDetails: {},
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid email responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/robert.kopec',
            headers: testHelper.authHeaders,
            payload: {
                password: 'test password',
                email: 123456,
                firstName: 'test first name',
                lastName: 'test last name',
                role: {},
                patientDetails: {},
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid first name responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/robert.kopec',
            headers: testHelper.authHeaders,
            payload: {
                password: 'test password',
                email: 'test email',
                firstName: false,
                lastName: 'test last name',
                role: {},
                patientDetails: {},
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid last name responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/robert.kopec',
            headers: testHelper.authHeaders,
            payload: {
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: true,
                role: {},
                patientDetails: {},
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid role responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/robert.kopec',
            headers: testHelper.authHeaders,
            payload: {
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                role: 'hello',
                patientDetails: {},
            },
        });
        expect(res.statusCode).toBe(400);
    });

    test('Invalid patient details responds with 400', async () => {
        const res = await server.inject({
            method: 'put',
            url: '/users/robert.kopec',
            headers: testHelper.authHeaders,
            payload: {
                password: 'test password',
                email: 'test email',
                firstName: 'test first name',
                lastName: 'test last name',
                role: {},
                patientDetails: [],
            },
        });
        expect(res.statusCode).toBe(400);
    });
});

describe('DELETE /', () => {
    test('responds with 200', async () => {
        const res = await server.inject({
            method: 'delete',
            url: '/users/adam.jones',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(200);
        expect(res.result).toBe('Deleted a user: adam.jones')
    });
});

describe('DELETE / Invalid inputs', () => {
    test('Invalid credentials responds with 401', async () => {
        const res = await server.inject({
            method: 'delete',
            url: '/users/adam.jones',
        });
        expect(res.statusCode).toBe(401);
    });

    test('Invalid username responds with 404', async () => {
        const res = await server.inject({
            method: 'delete',
            url: '/users',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(404);
    });

    test('Trying to delete an admin responds with 406', async () => {
        const res = await server.inject({
            method: 'delete',
            url: '/users/robert.kopec',
            headers: testHelper.authHeaders,
        });
        expect(res.statusCode).toBe(406);
    });
});