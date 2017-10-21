'use strict';

const path = require("path");
const routerGet = require("./routerGet");
const routerGetFile = require("./routerGetFile");
// const routerPost = require("./routerPost");
// const routerPatch = require("./routerPatch");
// const routerDelete = require("./routerDelete");

module.exports = (_req, _res) => {
	
	const { method, url } = _req;
	const parse = path.parse(url);

	// console.log(parse);

	switch (method) {
		case "GET": //user to retrieve a list of users, //user/:id to retrieve a user,
			if (parse.ext) {
				routerGetFile(_req, _res, parse);
			} else {
				routerGet(_req, _res);
			}
		// case "POST": //user or PUT /user:/id to create a new user,

		// case "PATCH": //user/:id to modify an existing user record,

		// case "DELETE": //user/:id to remove a user.

		default:
			_res.writeHead(405);
			_res.end('Method Not Allowed');
	}
};