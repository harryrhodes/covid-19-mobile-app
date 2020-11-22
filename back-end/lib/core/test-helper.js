const { init } = require('./server');
const db = require('./db');

/** @type {import('@hapi/hapi').Server} */
let server;
/** @type {import('mongoose').Connection} */
let dbConn;

module.exports = {
    authHeaders: {
        Authorization: 'Basic dXNlcjo2YzVmZjk1OTVjYjc2OWVmZmM1ZjVhN2U5ZDJlMjMwNQ==',
    },

    /** Sets up HAPI and MongoDB for running functional tests
   * @returns {Promise<import('@hapi/hapi').Server>} */
    setupFunctionalTest: async () => {
        server = await init();
        db.hapiServer = server;
        dbConn = await db.connect(process.env['MONGO_URL']);
        return server;
    },

    /** Tears down HAPI and MongoDB after running functional tests
   * @returns {Promise<void>} */
    teardownFunctionalTest: async () => {
        await server.stop();
        if (dbConn) await dbConn.close();
    },

};