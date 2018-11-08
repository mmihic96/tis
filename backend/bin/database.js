/**
 * @description Creates database connection
 * @author Milos Mihic <milosmihic9@gmail.com>
 * @license
 */
let mongoose = require('mongoose');
let logger = require('../utils/logger.util');
let config = require('../config/database.config');

mongoose.connect(config.getUrl(), { useNewUrlParser: true }).then(() => {
    logger.info(`Connected to database ${config.database}`);
}).catch(error => {
    logger.error(error);
});