﻿var Logger = require('./log');
var log1 = Logger();

var log2 = Logger(
    {
        path: __dirname + '\\tmp\\log2.txt',
        defaultLevel: 'warn'
    });


log1('one');
log1.info('two');
log2('three');
log2.critical('four');