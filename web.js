'use strict';
const config = require('./config/config');
const http = require('http');
const https = require('https');

const web = {};

web["https"] = https;
web["http"] = http;

module.exports = web;