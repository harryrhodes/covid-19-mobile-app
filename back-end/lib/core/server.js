const config = require('./config');
const logger = require('./logger');

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Basic = require('@hapi/basic'); // basic authentication
const HapiSwagger = require('hapi-swagger');
const fs = require('fs');
const path = require('path');
const Pack = require('../../package.json');

/** @type {import('@hapi/hapi').Server} */
const server = Hapi.server({
    port: config.serverPort,
    // host: 'localhost',
    routes: {
        cors: true,
    },
});

server.route({
    method: 'GET',
    path: '/',
    handler() {
        return `Valhalla Software API\nVersion: ${Pack.version}`;
    }
});

// log server events
server.events.on('log', (event, tags) => {
    let message = '';
    let caller = '';
    if (event.data) {
        if (event.data.message) { message = event.data.message; } else { message = event.data; }
        if (event.data.caller) caller = event.data.caller;
    } else if (event.error) {
        if (event.error.message) { message = event.error.message; } else { message = event.error; }
        if (event.error.caller) caller = event.error.caller;
    }
    if (tags.error) {
        logger.error(message, caller, event.timestamp);
    } else if (tags.warn) {
        logger.warn(message, caller, event.timestamp);
    } else if (tags.debug) {
        logger.debug(message, caller, event.timestamp);
    } else {
        logger.info(message, caller, event.timestamp);
    }
});

// log app generated request events
server.events.on({ name: 'request', channels: 'app' }, (request, event, tags) => {
    if (tags.received) {
        logger.requestReceived(request, event.timestamp);
    } else {
        let message = '';
        let caller = '';
        if (event.data) {
            if (event.data.message) { message = event.data.message; } else { message = event.data; }
            if (event.data.caller) caller = event.data.caller;
        } else if (event.error) {
            if (event.error.message) { message = event.error.message; } else { message = event.error; }
            if (event.error.caller) caller = event.error.caller;
        }
        if (tags.error) {
            logger.error(message, caller, event.timestamp);
        } else if (tags.warn) {
            logger.warn(message, caller, event.timestamp);
        } else if (tags.debug) {
            logger.debug(message, caller, event.timestamp);
        } else {
            logger.info(message, caller, event.timestamp);
        }
    }
});

// log internal request events
server.events.on({ name: 'request', channels: 'internal' }, (request, event, tags) => {
    let message = '';
    let status = '';
    if (event.data) {
        if (event.data.message) { message = event.data.message; } else { message = event.data; }
        if (event.data.output && event.data.output.statusCode) status = event.data.output.statusCode;
    } else if (event.error) {
        if (event.error.message) { message = event.error.message; } else { message = event.error; }
        if (event.error.output && event.error.output.statusCode) status = event.error.output.statusCode;
    }
    if (tags.error) {
        logger.requestResponded(request, status, true, message, event.timestamp);
    } else {
        logger.requestResponded(request, status, false, message, event.timestamp);
    }
});

/**
 * Validates authentication credentials
 * @param {import('@hapi/hapi').Request} request 
 * @param {string} username 
 * @param {string} password 
 */
const validate = async (request, username, password) => {
    const isValid = config.passwords.includes(password);
    const credentials = { caller: username, };
    return { isValid, credentials };
};

/**
 * Registers the HAPI plugins & routes etc
 * @async
 * @returns {Promise<void>}
 */
const register = async () => {
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: 'Valhalla Software Documentation',
                    version: Pack.version,
                },
                securityDefinitions: {
                    simple: { type: 'basic', },
                }
            }
        },
        Basic,
    ]);

    // register authentication
    server.auth.strategy('simple', 'basic', { validate });

    // register routes
    let routesDir = path.normalize(path.join(__dirname, '../routes'));
    fs.readdirSync(routesDir).forEach((file) => {
        server.route(require('../routes/' + file));
    });
};

/**
 * Initialises but does not start a HAPI server
 * @async
 * @returns {Promise<import('@hapi/hapi').Server>} HAPI server instance
 */
module.exports.init = async () => {
    await register();
    await server.initialize();
    return server;
};

/**
 * Starts a HAPI server
 * @async
 * @returns {Promise<import('@hapi/hapi').Server>} HAPI server instance
 */
module.exports.start = async () => {
    await register();
    await server.start();
    server.log(['info'], { message: `Server running on ${server.info.uri}`, caller: __filename });
    return server;
};