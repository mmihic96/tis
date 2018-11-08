/**
 * @description Creates config for development mode. Please edit properties to setup your development environment.
 * @author Milos Mihic <milosmihic9@gmail.com>
 * @license
 */
let path = require('path');

module.exports = {
    hostname: "localhost",
    port: "3000",
    dbHostname: "localhost",
    dbPort: "27017",
    database: "tis",
    dbUser: "mmihic",
    dbPassword: "asd",
    logStorage: path.join(__dirname, '..', 'logs'),
    fileStorage: path.join(__dirname, 'fileStorage')
};