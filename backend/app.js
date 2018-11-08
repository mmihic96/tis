/**
 * @description Creates express application
 * @author Milos Mihic <milosmihic9@gmail.com>
 * @license
 */
let express = require('express');
let http = require('http');
let bodyParser = require('body-parser');
let fileUpload = require('express-fileupload');
let cors = require('cors')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));
app.use(cors());

app.use('/', require('./routes/index.routes'));

module.exports = http.Server(app);


