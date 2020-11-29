const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const moment = require('moment');
const bcrypt = require('bcrypt');
const db = require('../core/db');
const config = require('../core/config');
const User = require('../models/user').model;

module.exports = [];

/**
 * Handles GET requests
 * @param {import('@hapi/hapi/lib/request')} request
 * @param {import('@hapi/hapi/lib/handler')} handler
 * @returns {import('@hapi/hapi/lib/response')} HAPI response
 */
module.exports.getUsers = async (request) => {
    try {
        request.log(['received']);

        await db.connect();

        let query = {};

        // if username or account type provided filter by that
        if (request.params.username) query.username = request.params.username;
        if (request.query.accountType) query.accountType = request.query.accountType;

        let users = await User.find(query).lean();

        return {
            count: users.length,
            data: users
        }
    } catch (error) {
        request.log(['error'], { message: error, caller: __filename });
        throw error;
    }
};

/**
 * Handles GET requests
 * @param {import('@hapi/hapi/lib/request')} request
 * @param {import('@hapi/hapi/lib/handler')} handler
 * @returns {import('@hapi/hapi/lib/response')} HAPI response
 */
module.exports.getUsersUsernameEmail = async (request) => {
    try {
        request.log(['received']);

        await db.connect();

        let users = await User.find({}).lean();

        return {
            usernames: users.map((user) => user.username),
            emails: users.map((user) => user.email)
        }
    } catch (error) {
        request.log(['error'], { message: error, caller: __filename });
        throw error;
    }
};

/**
 * Handles GET requests
 * @param {import('@hapi/hapi/lib/request')} request
 * @param {import('@hapi/hapi/lib/handler')} handler
 * @returns {import('@hapi/hapi/lib/response')} HAPI response
 */
module.exports.loginUser = async (request) => {
    try {
        request.log(['received']);

        await db.connect();

        let query = {};

        if (request.params.username) {
            if (request.params.username.includes('@')) {
                query.email = request.params.username;
            } else {
                query.username = request.params.username.toLowerCase();
            }
        }

        let user = await User.find(query).lean();

        if (!user[0]) return { status: 'Invalid Username/Email', user: {} };

        let match = false;
        if (request.query.password) {
            // bcrypt.hash('adam', 10, function (err, hash) {
            //     console.log(hash)
            // });
            match = await bcrypt.compare(request.query.password, user[0].password);
        }

        return {
            status: match ? 'Success' : 'Incorrect Password',
            user: match ? user[0] : {}
        }
    } catch (error) {
        request.log(['error'], { message: error, caller: __filename });
        throw error;
    }
};

/**
 * Handles POST requests
 * @param {import('@hapi/hapi/lib/request')} request
 * @param {import('@hapi/hapi/lib/handler')} handler
 * @returns {import('@hapi/hapi/lib/response')} HAPI response
 */
module.exports.createNewUser = async (request) => {
    try {
        request.log(['received']);

        // set up
        await db.connect();

        // Must provide all required parameters
        if (!request.payload.username) return Boom.badRequest('No username specified');
        if (!request.payload.password) return Boom.badRequest('No password specified');
        if (!request.payload.email) return Boom.badRequest('No email specified');
        if (!request.payload.firstName) return Boom.badRequest('No firstName specified');
        if (!request.payload.lastName) return Boom.badRequest('No lastName specified');
        if (!request.payload.accountType) return Boom.badRequest('No accountType specified');

        //hash and salt password
        let password = bcrypt.hashSync(request.payload.password, 10)

        let newUser = await new User({
            username: request.payload.username,
            password: password,
            email: request.payload.email,
            firstName: request.payload.firstName,
            lastName: request.payload.lastName,
            accountType: request.payload.accountType,
            role: request.payload.role ? request.payload.role : {},
            patientDetails: request.payload.patientDetails ? request.payload.patientDetails : {},
            symptoms: request.payload.symptoms ? request.payload.symptoms : [],
        })

        await User.insertMany(newUser);

        let user = await User.find({ username: request.payload.username }).lean();

        return user[0];
    } catch (error) {
        request.log(['error'], { message: error, caller: __filename });
        throw error;
    }
};

/**
 * Handles PUT requests
 * @param {import('@hapi/hapi/lib/request')} request
 * @param {import('@hapi/hapi/lib/handler')} handler
 * @returns {import('@hapi/hapi/lib/response')} HAPI response
 */
module.exports.updatePatientSymptoms = async (request) => {
    try {
        request.log(['received']);

        // set up
        await db.connect();

        let user = await User.find({ username: request.params.username }).lean();

        if (!user[0]) return Boom.notFound('No user found by this username');
        if (user[0].accountType !== 'patient') return Boom.notAcceptable('User needs to be a patient');

        let updatedUser = await new User(user[0]);

        updatedUser.symptoms.push({
            date: moment.utc().toISOString(),
            details: request.payload.symptoms
        })

        await User.updateOne({ username: updatedUser.username }, updatedUser, { upsert: false, setDefaultsOnInsert: true });

        return updatedUser;

    } catch (error) {
        request.log(['error'], { message: error, caller: __filename });
        throw error;
    }
};


/**
 * Handles PUT requests
 * @param {import('@hapi/hapi/lib/request')} request
 * @param {import('@hapi/hapi/lib/handler')} handler
 * @returns {import('@hapi/hapi/lib/response')} HAPI response
 */
module.exports.updateUserDetails = async (request) => {
    try {
        request.log(['received']);

        // set up
        await db.connect();

        let user = await User.find({ username: request.params.username }).lean();

        if (!user[0]) return Boom.notFound('No user found by this username');

        let newPassword;
        if (request.payload.password) {
            //hash and salt password
            newPassword = bcrypt.hashSync(request.payload.password, 10)
        }

        let updatedUser = await new User({
            _id: user[0]._id,
            username: user[0].username,
            password: request.payload.password ? newPassword : user[0].password,
            email: request.payload.email ? request.payload.email : user[0].email,
            firstName: request.payload.firstName ? request.payload.firstName : user[0].firstName,
            lastName: request.payload.lastName ? request.payload.lastName : user[0].lastName,
            accountType: user[0].accountType,
            role: request.payload.role ? request.payload.role : user[0].role,
            patientDetails: request.payload.patientDetails ? request.payload.patientDetails : user[0].patientDetails,
            symptoms: user[0].symptoms,
        });

        await User.updateOne({ username: updatedUser.username }, updatedUser, { upsert: false, setDefaultsOnInsert: true });

        return updatedUser;

    } catch (error) {
        request.log(['error'], { message: error, caller: __filename });
        throw error;
    }
};

/**
 * Handles DELETE requests
 * @param {import('@hapi/hapi/lib/request')} request
 * @param {import('@hapi/hapi/lib/handler')} handler
 * @returns {import('@hapi/hapi/lib/response')} HAPI response
 */
module.exports.deleteUser = async (request) => {
    try {
        request.log(['received']);

        // set up
        await db.connect();

        let user = await User.find({ username: request.params.username }).lean();
        if (!user[0]) return Boom.notFound('No user found by this username');
        if (user[0].accountType === 'admin') return Boom.notAcceptable('Cannot delete an admin user');

        await User.deleteOne({ username: request.params.username });

        return 'Deleted a user: ' + request.params.username;

    } catch (error) {
        request.log(['error'], { message: `Unable to delete a User ${error}`, caller: __filename });
        throw new Error(`ERROR: Unable to delete a User ${error}`);
    }
};

module.exports.push(
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: module.exports.getUsers,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Get users, you can provide username to return one user',
            notes: 'Get user by username',
            validate: {
                params: {
                    username: Joi.string().optional().description('Username of a user').example('name.surname123'),
                },
                query: {
                    accountType: Joi.string().valid('admin', 'practitioner', 'patient').optional().lowercase().description('What type of users to return').example('admin'),
                }
            },
            cache: {
                expiresIn: config.httpCacheExpiresIn,
                privacy: 'private'
            },
        },
    },
    {
        method: 'GET',
        path: '/users/validate',
        handler: module.exports.getUsersUsernameEmail,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Get all users usernames and emails',
            notes: 'Get all users usernames and emails to be used in register page',
            validate: {
            },
            cache: {
                expiresIn: config.httpCacheExpiresIn,
                privacy: 'private'
            },
        },
    },
    {
        method: 'GET',
        path: '/users/login/{username?}',
        handler: module.exports.loginUser,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Get user and check password',
            notes: 'Get user by username or email and compare passwords match to authenticate',
            validate: {
                params: {
                    username: Joi.string().required().description('Username of a user (this can also be an email)').example('name.surname'),
                },
                query: {
                    password: Joi.string().required().description('Users password').example('PaSsWoRd123'),
                },
            },
            cache: {
                expiresIn: config.httpCacheExpiresIn,
                privacy: 'private'
            },
        },
    },
    {
        method: 'POST',
        path: '/users',
        handler: module.exports.createNewUser,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Create a new user',
            notes: 'Create a new user',
            validate: {
                payload: {
                    username: Joi.string().required().description('Account username').example('name.lastname'),
                    password: Joi.string().required().description('Account password').example('password'),
                    email: Joi.string().required().description('Account email').example('name.lastname@valhalla.com'),
                    firstName: Joi.string().required().description('Users first name').example('Name'),
                    lastName: Joi.string().required().description('Users last name').example('Lastname'),
                    accountType: Joi.string().required().valid('admin', 'practitioner', 'patient').description('Type of the account').example('patient'),
                    role: Joi.object().optional().description('Role object of a practitioner'),
                    patientDetails: Joi.object().optional().description('Details of patient if a patient'),
                    symptoms: Joi.array().optional().description('Symptoms array if a patient'),
                },
            },
            response: {
                schema: Joi.object().description('New user object')
            },
        },
    },
    {
        method: 'PUT',
        path: '/users/symptoms/{username}',
        handler: module.exports.updatePatientSymptoms,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Update patients symptoms',
            notes: 'Update patients symptoms by adding it into the symptoms array',
            validate: {
                params: {
                    username: Joi.string().required().description('Username of a user').example('name.surname'),
                },
                payload: {
                    symptoms: Joi.array().items(Joi.object({
                        name: Joi.string().required().description('Name of the symptom').example('Dry Cough'),
                        comment: Joi.string().optional().allow('').description('Any comments').example('Severe dry cough'),
                    })).required().description('Array of symptoms'),
                },
            },
            cache: {
                expiresIn: config.httpCacheExpiresIn,
                privacy: 'private'
            },
        },
    },
    {
        method: 'PUT',
        path: '/users/{username}',
        handler: module.exports.updateUserDetails,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Update user details',
            notes: 'Update user details',
            validate: {
                params: {
                    username: Joi.string().required().description('Username of a user').example('name.surname'),
                },
                payload: {
                    password: Joi.string().optional().allow('').description('Account password').example('password'),
                    email: Joi.string().optional().allow('').description('Account email').example('password'),
                    firstName: Joi.string().optional().allow('').description('Users first name').example('Name'),
                    lastName: Joi.string().optional().allow('').description('Users last name').example('Lastname'),
                    role: Joi.object().optional().allow({}).description('Role object of a practitioner'),
                    patientDetails: Joi.object().optional().allow({}).description('Details of patient if a patient'),
                },
            },
            cache: {
                expiresIn: config.httpCacheExpiresIn,
                privacy: 'private'
            },
        },
    },
    {
        method: 'DELETE',
        path: '/users/{username}',
        handler: module.exports.deleteUser,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Delete a user',
            notes: 'Delete a user, cant delete an admin',
            validate: {
                params: {
                    username: Joi.string().required().description('Username of a user').example('name.surname'),
                },
            },
        },
    },
);