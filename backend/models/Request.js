let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RequestSchema = new Schema({
    RequestTitle: {
        type: String
    },
    RequestDescription: {
        type: String
    },
    DateFrom: {
        type: Date
    },
    DateTo: {
        type: Date
    },
    Status: {
        type: String
    },
    Reason: {
        type: String
    },
    Comment: {
        type: String
    },
    UserID: {
        type: String
    }
});

let RequestModel = mongoose.model('Request', RequestSchema);
module.exports = RequestModel;