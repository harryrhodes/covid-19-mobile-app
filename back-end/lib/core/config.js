module.exports = {
    // General
    debug: ['true', 'TRUE', '1', 'Y', 'YES', 'y', 'yes'].includes(process.env['DEBUG']) ? true : false,
    passwords: [
        '6c5ff9595cb769effc5f5a7e9d2e2305',
    ],
    // Server
    serverPort: process.env['SERVER_PORT'] || 4000,

    // MongoDB
    dbConnectionString: process.env['DB_CONNECTION_STRING'],

    // HTTP
    httpCacheExpiresIn: process.env['HTTP_CACHE_EXPIRESIN'] || 10 * 1000,

};