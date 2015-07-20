var FileLogger = require('./file_logger');
var log1 = FileLogger();


log1.log('one');
log1.info('two');


var log2 = FileLogger(
    {
        path: __dirname + '\\tmp\\log2.txt',
        defaultLevel: 'warn'
    });

log2.log('three');
log2.critical('four');


