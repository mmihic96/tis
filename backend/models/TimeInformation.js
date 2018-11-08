let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TimeInformationSchema = new Schema({
    DateTime: {
        type: Date
    },
    EnteredHours: {
        type: String
    },
    Comment: {
        type: String
    },
    ProjectID: {
        type: String
    },
    UserID: {
        type: String
    }
});

let TimeInformationModel = mongoose.model('TimeInformation', TimeInformationSchema);
module.exports = TimeInformationModel;