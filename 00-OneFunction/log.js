﻿var fs = require('fs');
var file = fs.createWriteStream(__dirname + '\\tmp\\log.txt');

module.exports = function log(what) {
    var date = new Date();
    file.write(JSON.stringify({ when: date.toJSON(), what: what }) + '\n');
};