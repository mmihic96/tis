/**
 * @desc
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function createUser(req, res, next) {
    console.log(req.body);
    res.status(200).send(req.body);
}

module.exports.create = createUser;