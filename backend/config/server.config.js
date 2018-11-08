/**
 * @description Creates server config. Use config from development module if exist, otherwise use process environment variables.
 * @author Milos Mihic <milosmihic9@gmail.com>
 * @license
 */
let logger = require('../utils/logger.util');
let config = null;
try {
    config = require('./development.config.js');
    logger.info('Using development config!!!');
} catch (e) {
    logger.info('Using process environment variables!!!');
} finally {
    module.exports = {
        hostname: config.hostname || process.env.hostname,
        port: config.port || process.env.port,
        logStorage: config.logStorage || process.env.logStorage,
        fileStorage: config.fileStorage || process.env.fileStorage
    };
}