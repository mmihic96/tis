/**
 * @description Creates socket connection
 * @author Milos Mihic <milosmihic9@gmail.com>
 * @license
 */
let socket = require('socket.io');
let application = require('../app');
let logger = require('../utils/logger.util');

let io = socket(application);

io.on('connection', () => {
    logger.info('Socket connection established!');
});