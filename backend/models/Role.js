let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RoleSchema = new Schema({
    RoleName: {
        type: String
    },
    RoleDescription: {
        type: String
    }
});

let RoleModel = mongoose.model('Role', RoleSchema);
module.exports = RoleModel;