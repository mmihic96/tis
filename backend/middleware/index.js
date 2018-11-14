'use-strict'
/**
 * @author Aleksandar Preocanin <preocanin.aleksandar@gmail.com>
 * @description Exports all middlewares.
 */

var _authenticationMiddleware = require('./authentication.middleware');

module.exports = {
    authenticationMiddleware: _authenticationMiddleware
};
