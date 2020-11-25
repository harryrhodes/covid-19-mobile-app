const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const db = require('../core/db');
const config = require('../core/config');
const Symptom = require('../models/symptom').model;

module.exports = [];

/**
 * Handles GET requests
 * @param {import('@hapi/hapi/lib/request')} request
 * @param {import('@hapi/hapi/lib/handler')} handler
 * @returns {import('@hapi/hapi/lib/response')} HAPI response
 */
module.exports.getSymptoms = async (request) => {
    try {
        request.log(['received']);

        await db.connect();

        let symptoms = await Symptom.find().lean({});

        return {
            count: symptoms.length,
            data: symptoms
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
module.exports.addSymptom = async (request) => {
    try {
        request.log(['received']);

        // set up
        await db.connect();

        // Must provide all required parameters
        if (!request.payload.name) return Boom.badRequest('No name specified');

        let newSymptom = await new Symptom({
            name: request.payload.name
        });

        await Symptom.insertMany(newSymptom);

        return newSymptom;

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
module.exports.updateSymptomName = async (request) => {
    try {
        request.log(['received']);

        // set up
        await db.connect();

        let symptom = await Symptom.find({ name: request.params.name }).lean();

        if (!symptom[0]) return Boom.notFound('No symptom found');

        let updatedSymptom = await new Symptom({
            _id: symptom[0]._id,
            name: request.payload.name
        });

        await Symptom.updateOne({ name: request.params.name }, updatedSymptom, { upsert: false, setDefaultsOnInsert: true });

        return updatedSymptom;

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
module.exports.deleteSymptom = async (request) => {
    try {
        request.log(['received']);

        // set up
        await db.connect();

        let symptom = await Symptom.find({ name: request.params.name }).lean();

        if (!symptom[0]) return Boom.notFound('No symptom found');

        await Symptom.deleteOne({ name: request.params.name });

        return 'Deleted a symptom: ' + request.params.name;

    } catch (error) {
        request.log(['error'], { message: `Unable to delete a Symptom ${error}`, caller: __filename });
        throw new Error(`ERROR: Unable to delete a Symptom ${error}`);
    }
};

module.exports.push(
    {
        method: 'GET',
        path: '/symptoms',
        handler: module.exports.getSymptoms,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Get all symptoms',
            notes: 'Get all symptoms',
            cache: {
                expiresIn: config.httpCacheExpiresIn,
                privacy: 'private'
            },
        },
    },
    {
        method: 'POST',
        path: '/symptoms',
        handler: module.exports.addSymptom,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Add a new symptom',
            notes: 'Add a new symptom',
            validate: {
                payload: {
                    name: Joi.string().required().description('Symptom Name').example('Cough'),
                },
            },
            response: {
                schema: Joi.object().description('New symptom object')
            },
        },
    },
    {
        method: 'PUT',
        path: '/symptoms/{name}',
        handler: module.exports.updateSymptomName,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Update symptom name',
            notes: 'Update symptom name',
            validate: {
                params: {
                    name: Joi.string().required().description('Symptom Name').example('Cough'),
                },
                payload: {
                    name: Joi.string().required().description('Symptom Name').example('Cough'),
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
        path: '/symptoms/{name}',
        handler: module.exports.deleteSymptom,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Delete a user',
            notes: 'Delete a user, cant delete an admin',
            validate: {
                params: {
                    name: Joi.string().required().description('Symptom Name').example('Cough'),
                },
            },
        },
    },
);