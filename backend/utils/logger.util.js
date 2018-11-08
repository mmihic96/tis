/**
 * @description Represents logger. Logger have 3 levels (info, warn, error, debug). Logger write colored message to console and write message to file.
 *              Module is exported as Singleton class.
 * @author Milos Mihic <milosmihic9@gmail.com>
 * @license
 */

let fs = require('fs');
let path = require('path');
let moment = require('moment');

let pathToLogDir = path.join(__dirname, '..', 'logs');

let instance = null;

const COLOR = {
    RED: "\x1b[31m%s\x1b[0m",
    GREEN: "\x1b[32m%s\x1b[0m",
    YELLOW: "\x1b[33m%s\x1b[0m",
    BLUE: "\x1b[36m%s\x1b[0m"
};

class Logger {
    info(message) {
        if (typeof message !== 'string') {
            message = JSON.stringify(message);
        }
        console.info(COLOR.GREEN, `[INFO MESSAGE] - [${moment().format('DD-MM-YYYY HH:MM:SS')}]:\n${message}\n`);
        _writeToFile('info', message);
    }

    warn(message) {
        if (typeof message !== 'string') {
            message = JSON.stringify(message);
        }
        console.info(COLOR.YELLOW, `[WARNING MESSAGE] - [${moment().format('DD-MM-YYYY HH:MM:SS')}]:\n${message}\n`);
        _writeToFile('warning', message);
    }

    debug(message) {
        if (typeof message !== 'string') {
            message = JSON.stringify(message);
        }
        console.info(COLOR.BLUE, `[DEBUG MESSAGE] - [${moment().format('DD-MM-YYYY HH:MM:SS')}]:\n${message}\n`);
        _writeToFile('debug', message);
    }

    error(message) {
        if (typeof message !== 'string') {
            message = JSON.stringify(message);
        }
        console.info(COLOR.RED, `[ERROR MESSAGE] - [${moment().format('DD-MM-YYYY HH:MM:SS')}]:\n${message}\n`);
        _writeToFile('error', message);
    }
}

/**
 * @desc Writes message to log file
 * @param {String} errorType 
 * @param {String} message 
 */
function _writeToFile(errorType, message) {
    let pathToLogFile = path.join(pathToLogDir, `app-${errorType}.log`);
    let logMessage = `[${moment().format('DD-MM-YYYY HH:MM:SS')}] - ${message}\n`;
    if (fs.existsSync(pathToLogFile)) {
        return fs.appendFileSync(pathToLogFile, logMessage, 'utf8');
    }
    return fs.writeFileSync(pathToLogFile, logMessage, 'utf8');
}

/**
 * @desc Creates instance if not exist
 * @return Logger instance
 */
function getInstance() {
    if (!instance) {
        instance = new Logger();
    }
    return instance;
}

module.exports = getInstance();