'use-strict'
/**
 * @author Aleksandar Preocanin <preocanin.aleksandar@gmail.com>
 * @description Config file for authentication middleware.
 */

let configMod = {};

try {
    configMod = require('./config.mod');;
    console.error('Authentication Middleware uses config.mod');
} catch(e) {
    console.error('Authentication Middleware uses config.def');
} finally {
    module.exports = {
        secretKey: configMod.secretKey || "nDY8wcV8u54kuJBbcNh0mg0cnxI9dKMWnPMWMSsV"
    };
}
