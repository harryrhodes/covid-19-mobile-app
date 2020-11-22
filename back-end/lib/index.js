require('dotenv').config({ path: '.env' });

const server = require('./core/server');
const db = require('./core/db');

const init = async () => {
    const hapiServer = await server.start();
    db.hapiServer = hapiServer;
    await db.connect();
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
