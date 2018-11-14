'use-strict'
/**
 * @author Aleksandar Preocanin <preocanin.aleksandar@gmail.com>
 * @description Authentication middleware which uses JWT.
 */

const config = require('./config.def');

var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

/**
 * Middlware used to validate token.
 */
var _validateToken = expressJwt({
    secret: config.secretKey
});

/**
 * Sings(makes) new token based on id and role id.
 * @param {String} id 
 * @param {String} roleId 
 */
var _signToken = function(id, roleId) {
    return jwt.sign({ _id: id, roleId: roleId }, config.secretKey, {
        expiresIn: "12h"
    });
};

module.exports = {
    signToken: _signToken,
};
