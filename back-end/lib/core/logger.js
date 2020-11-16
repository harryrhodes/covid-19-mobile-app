const path = require('path');
const config = require('./config');

/**
 * Logs an HTTP request received to the console
 * @param {import('@hapi/hapi').Request} request - HAPI request object
 * @param {string} [timestamp] - Option timestamp, defaults to now
 * @returns {string} constructed message
 */
module.exports.requestReceived = (
    request,
    timestamp = null,
) => {
    if (!request) return '';
    let output =
        `${timestamp ? new Date(timestamp).toISOString() : (new Date()).toISOString()} \
HTTP ${request.method.toUpperCase()} Received: \
${(request.auth && request.auth.credentials && request.auth.credentials.caller) ? '(' + request.auth.credentials.caller + ') ' : ''}\
${request.url}`;
    if (process.env.NODE_ENV !== 'test') console.log(output);
    return output;
};

/**
 * Logs an HTTP request responsed to the console
 * @param {import('@hapi/hapi').Request} request - HAPI request object
 * @param {string} statusCode - HTTP status code
 * @param {boolean} isError - Is it an error? 
 * @param {string} [message] - Optional error message
 * @param {string} [timestamp] - Option timestamp, defaults to now
 * @returns {string} constructed message
 */
module.exports.requestResponded = (
    request,
    statusCode,
    isError,
    message = '',
    timestamp = null,
) => {
    if (!request) return '';
    let output =
        `${timestamp ? new Date(timestamp).toISOString() : (new Date()).toISOString()} \
HTTP ${request.method.toUpperCase()} \
Status ${statusCode}${message ? ' ' + message + ' ' : ''}: \
${(request.auth && request.auth.credentials && request.auth.credentials.caller) ? '(' + request.auth.credentials.caller + ') ' : ''}\
${request.url}`;
    if (process.env.NODE_ENV !== 'test') isError ? console.error(output) : console.log(output);
    return output;
};

/**
 * Logs an INFO line to the console
 * @param {string} message - message to log
 * @param {string} [caller] - filename of caller
 * @param {string} [timestamp] - Option timestamp, defaults to now
 * @returns {string} constructed message
 */
module.exports.info = (
    message,
    caller = '',
    timestamp = null,
) => {
    let output =
        `${timestamp ? new Date(timestamp).toISOString() : (new Date()).toISOString()} \
INFO: \
${caller ? '(' + path.basename(caller, '.js') + ') ' : ''}\
${message}`;
    if (process.env.NODE_ENV !== 'test') console.log(output);
    return output;
};

/**
 * Logs an ERROR line to the console
 * @param {string} message - message to log
 * @param {string} [caller] - filename of caller
 * @param {string} [timestamp] - Option timestamp, defaults to now
 * @returns {string} constructed message
 */
module.exports.error = (
    message,
    caller = '',
    timestamp = null,
) => {
    let output =
        `${timestamp ? new Date(timestamp).toISOString() : (new Date()).toISOString()} \
ERROR: \
${caller ? '(' + path.basename(caller, '.js') + ') ' : ''}\
${message}`;
    if (process.env.NODE_ENV !== 'test') console.error(output);
    return output;
};

/**
 * Logs an WARN line to the console
 * @param {string} message - message to log
 * @param {string} [caller] - filename of caller
 * @param {string} [timestamp] - Option timestamp, defaults to now
 * @returns {string} constructed message
 */
module.exports.warn = (
    message,
    caller = '',
    timestamp = null,
) => {
    let output =
        `${timestamp ? new Date(timestamp).toISOString() : (new Date()).toISOString()} \
WARN: \
${caller ? '(' + path.basename(caller, '.js') + ') ' : ''}\
${message}`;
    if (process.env.NODE_ENV !== 'test') console.warn(output);
    return output;
};

/**
 * Logs an DEBUG line to the console (only if debugging is enabled)
 * @param {string} message - message to log
 * @param {string} [caller] - filename of caller
 * @param {string} [timestamp] - Option timestamp, defaults to now
 * @returns {string} constructed message
 */
module.exports.debug = (
    message,
    caller = '',
    timestamp = null,
) => {
    let output =
        `${timestamp ? new Date(timestamp).toISOString() : (new Date()).toISOString()} \
DEBUG: \
${caller ? '(' + path.basename(caller, '.js') + ') ' : ''}\
${message}`;
    if (config.debug) console.debug(output);
    return output;
};