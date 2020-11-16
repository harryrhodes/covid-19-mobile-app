const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const _ = require('lodash');
const moment = require('moment');

const db = require('../core/db');
const utils = require('../core/utils');
const config = require('../core/config');
const User = require('../models/user').model;

module.exports = [];

/**
 * Handles GET requests
 * @param {import('@hapi/hapi/lib/request')} request
 * @param {import('@hapi/hapi/lib/handler')} handler
 * @returns {import('@hapi/hapi/lib/response')} HAPI response
 */
module.exports.getUser = async (request) => {
    try {
        request.log(['received']);

        // await db.connect();

        return 'hello';
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
        // await db.connect();

        return '';
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
module.exports.updateUser = async (request) => {
    try {
        request.log(['received']);

        // set up
        // await db.connect();

        return '';

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
        // await db.connect();

        return '';

    } catch (error) {
        request.log(['error'], { message: `Unable to fully deprecate DOR Template ${error}`, caller: __filename });
        throw new Error(`ERROR: Unable to fully deprecate DOR Template ${error}`);
    }
};

module.exports.push(
    {
        method: 'GET',
        path: '/user/{username?}',
        handler: module.exports.getUser,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Get user and login',
            notes: 'Get user by username and compare passwords match to authenticate',
            validate: {
                params: {
                    // id: Joi.number().integer().optional().description('User ID').example(516732),
                    username: Joi.string().optional().description('Username of a user').example('name.surname123'),
                },
                query: {
                    password: Joi.string().description('Encrypted users password').example('PaSsWoRd123'),
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
        path: '/user',
        handler: module.exports.createNewUser,
        options: {
            tags: ['api'],
            log: { collect: true, },
            auth: 'simple',
            description: 'Create a new user',
            notes: 'Create a new user',
            validate: {
                payload: {
                    username: Joi.string().required().description('Account username').example('name.lastname123'),
                    firstName: Joi.string().required().description('Account username').example('name.lastname123'),
                    lastName: Joi.string().required().description('Account username').example('name.lastname123'),
                    accountType: Joi.string().required().valid('admin', 'practitioner', 'patient').description('Type of the account').example('patient'),
                    role: Joi.object().optional().description('Account username'),
                    patientDetails: Joi.object().optional().description('Account username'),
                    symptoms: Joi.object().optional().description('Account username'),
                },
            },
            response: {
                schema: Joi.object().description('New user object')
            },
            // cache: {
            //   expiresIn: config.httpCacheExpiresIn,
            //   privacy: 'private'
            // },
        },
    },
    // {
    //     method: 'PUT',
    //     path: '/dor-templates/{id}',
    //     handler: module.exports.publishDorTemplate,
    //     options: {
    //         tags: ['api'],
    //         log: { collect: true, },
    //         auth: 'simple',
    //         description: 'Publish an draft DOR template',
    //         notes: 'Publish an draft DOR template',
    //         validate: {
    //             params: {
    //                 id: Joi.number().integer().required().description('Work item ID').example(516732),
    //             },
    //             payload: {
    //                 createDashboard: Joi.boolean().default(false).description('Whether to create a dashboard in Azure DevOps').example(true),
    //             },
    //         },
    //         response: {
    //             schema: Joi.object({
    //                 id: Joi.number().description('DOR Template work item ID').example(123456),
    //                 dashboardId: Joi.string().allow('').description('Dashboard GUID.  Blank if no dashboard created').example('799a6519-95c1-45c6-aa19-c03d432fdfe8'),
    //                 data: Joi.object().description('DOR Template work item'),
    //             })
    //         },
    //     },
    // },
    // {
    //     method: 'DELETE',
    //     path: '/dor-templates/{id}',
    //     handler: module.exports.deprecateDorTemplate,
    //     options: {
    //         tags: ['api'],
    //         log: { collect: true, },
    //         auth: 'simple',
    //         description: 'Deprecate a DOR Template',
    //         notes: 'Deprecate a DOR Template and set all of its assigned DORs to inactive',
    //         validate: {
    //             params: {
    //                 id: Joi.number().integer().required().description('Work item ID to be deprecated').example(618974),
    //             },
    //             payload: {
    //                 comment: Joi.string().required().description('Reason to deprecate a DOR Template').example('The DOR Template is outdated and is no longer useful to teams.'),
    //                 user: Joi.string().allow('').description('Email of a user that is deprecating the DOR Template').example('name.surname@ivanti.com'),
    //             },
    //         },
    //         response: {
    //             schema: Joi.object().description('Deprecated Work Item object'),
    //         },
    //     },
    // },
);