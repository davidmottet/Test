'use strict';

const path = require("path");

const routerGet = require("./routerGet");
const routerGetFile = require("./routerGetFile");
// const routerPost = require("./routerPost");
// const routerPatch = require("./routerPatch");
// const routerDelete = require("./routerDelete");

const database = require('../database');

module.exports = (_req, _res) => {
	
	const { method, url } = _req;
	const parse = path.parse(url);

	switch (method) {
		case "GET": //user to retrieve a list of users, //user/:id to retrieve a user,
			if (parse.ext) {
				routerGetFile(_req, _res, parse);
			} else {
				routerGet(_req, _res, parse);
			}
		case "POST": //user or PUT /user:/id to create a new user,
			let requestBody = '';
			_req.on('data', function(data) {
				requestBody += data;
				if(requestBody.length > 1e7) {
					response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
					response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
				}
			});
			_req.on('end', function() {
				_res.writeHead(200, {'Content-Type': 'text/html'});
				_res.end("<!doctype html><html><head><title>response</title></head><body>Thanks for the data!</body></html>");
				database.createPage(JSON.parse(requestBody));
			});
			// 
		// case "PATCH": //user/:id to modify an existing user record,

		// case "DELETE": //user/:id to remove a user.

		default:
			_res.writeHead(405);
			_res.end('Method Not Allowed');
	}
};