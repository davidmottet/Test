'use strict';
const config = require('./config/config');
const web = {};

global.dirname = __dirname;

// TODO : delete
web["http"] = require('http');

web["https"] = require('https');

web["router"] = require('./router');

module.exports = web;