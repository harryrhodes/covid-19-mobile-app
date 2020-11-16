const Mongoose = require('mongoose');
const config = require('./config');
// const logger = require('./logger');

/** @type {import('mongoose').Connection} */
let db = null;

/** @type {import('@hapi/hapi').Server} */
module.exports.hapiServer = {};

/**
 * Connects to the database, retry up to 3 times
 * @async
 * @param {string} [uri] - optional connection string URI.  Default = use env var
 * @returns {Promise<import('mongoose').Connection>} Mongoose connection
 */
module.exports.connect = async (
    uri,
) => {
    if (!uri) uri = config.dbConnectionString;
    for (let retryCount = 0; retryCount < 3; retryCount++) {
        try {
            if (Mongoose.STATES[Mongoose.connection.readyState] == 'disconnected' || !db) {
                await Mongoose.connect(
                    uri,
                    // { useNewUrlParser: true, useUnifiedTopology: true, compression: 'zlib' }
                    { useNewUrlParser: true, useUnifiedTopology: true, }
                );
                db = Mongoose.connection;
                // logger.info(`Connection with database '${db.db.databaseName}' succeeded.`, __filename);
                module.exports.hapiServer.log(['info'], { message: `Connection with database '${db.db.databaseName}' succeeded.`, caller: __filename });
            }
            retryCount = 999;
            break;
        } catch (err) {
            // logger.error('ERROR: Unable to connect to db. Another connection is possibly in progress. Trying again', __filename);
            module.exports.hapiServer.log(['error'], { message: 'Unable to connect to db. Another connection is possibly in progress. Trying again.', caller: __filename });
            if (retryCount < 2) {
                await module.exports.wait(500);
            } else {
                throw new Error(err);
            }
        }
    }
    return db;
};

/**
 * Pauses for X milliseconds
 * @param {number} ms - time in milliseconds
 * @returns {Promise} promise
 */
module.exports.wait = (ms) => {
    return new Promise(resolve => {
        if (ms) {
            setTimeout(resolve, ms);
        } else {
            resolve = true;
        }
    });
};

// //load database
// Mongoose.connect(
//   config.dbConnectionString,
//   { useNewUrlParser: true, useUnifiedTopology: true, }
// );
// const db = Mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function callback() {
//   console.log('Connection with database succeeded.');
// });

exports.db = db;