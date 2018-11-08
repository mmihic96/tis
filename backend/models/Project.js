let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    ProjectName: {
        type: String
    },
    ProjectDescription: {
        type: String
    },
    Users: []
});

let ProjectModel = mongoose.model('Project', ProjectSchema);
module.exports = ProjectModel;