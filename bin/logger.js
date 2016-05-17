const winston = require('winston');

const logger = new (winston.logger)({
    transports: [
          new (winston.transports.Console)(),
          new (winston.transports.File)({ filename: 'server.log' })]
})