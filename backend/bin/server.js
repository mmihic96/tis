/**
 * @description Creates server connection
 * @author Milos Mihic <milosmihic9@gmail.com>
 * @license
 */
let server = require('../app');
let logger = require('../utils/logger.util');
let config = require('../config/server.config');

server.listen(config.port, config.hostname, () => {
    logger.info(`Listening on - ${config.hostname}:${config.port}`);
});
