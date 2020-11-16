const _ = require('lodash');

/**
 * Removes & converts HTML code to normal text
 * @param {string} html
 * @returns {string} text
 */
module.exports.html2text = function (html) {
    return _.trim(
        html
            .replace(/(<p([^>]*)>)/ig, '\n')
            .replace(/(<div([^>]*)>)/ig, '\n')
            .replace(/(<span([^>]*)>)/ig, '\n')
            .replace(/(<br([^>]*)>)/ig, '\n')
            .replace(/(<([^>]+)>)/ig, '')
            .replace(/&nbsp;/ig, ' ')
            .replace(/&quot;/ig, '"')
            .replace(/&lt;/ig, '<')
            .replace(/&gt;/ig, '>')
            .replace(/&amp;/ig, '&')
            .trim()
        , '\n');
};