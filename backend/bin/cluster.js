/**
 * @description Creates multi-core system sharing same socket, database and server
 * @author Milos Mihic <milosmihic9@gmail.com>
 * @license
 */
let cluster = require('cluster');
let numCPUs = require('os').cpus().length;
let logger = require('../utils/logger.util');

if (cluster.isMaster) {
    // Workers can share any TCP connection
    // In this case it is an HTTP server, database and socket
    logger.info(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        logger.info(`worker ${worker.process.pid} died`);
    });
} else {
    require('./database');
    require('./server');
    require('./socket');
    logger.info(`Worker ${process.pid} started`);
}