//var Redis = require('redis');
var config = require('../config').redis;

//var redisClient = Redis.createClient(config.port, config.host, config.options);

var redisClient = config; //stam
module.exports = redisClient;