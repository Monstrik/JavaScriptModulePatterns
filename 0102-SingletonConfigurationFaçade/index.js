var config = require('./config');

console.log('--redis');
console.log(config.redis);
console.log('--couchdb');
console.log(config.couchdb);


var redisconfig = require('./config').redis;
console.log('--redisconfig');
console.log(redisconfig);
console.log('--redisconfig.user');
console.log(redisconfig.user);

var couchdbconfig = require('./config').couchdb;
console.log('--couchdbconfig');
console.log(couchdbconfig);