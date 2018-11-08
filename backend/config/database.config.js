"use-strict"
/**
 * @description Creates database config. Use config from development module if exist, otherwise use process environment variables.
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
        hostname: config.dbHostname || process.env.dbHostname,
        port: config.dbPort || process.env.dbPort,
        database: config.database || process.env.database,
        username: config.dbUser || process.env.dbUser,
        password: config.dbPassword || process.env.dbPassword,
        getUrl: function () { return `mongodb://${this.hostname}:${this.port}/${this.database}`; }
    };
}