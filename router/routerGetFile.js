'use strict';
const config = require("../config/config");
const typeFile = require("../config/fileType");

const path = require("path");
const fs = require("fs");

module.exports = (_req, _res, _file) => {
	// TO CHANGE: check other method 
	const filePath = `${global.dirname}/${config.file}${_file.dir}/${_file.base}`;

	if (fs.existsSync(filePath)) {
		const stat = fs.statSync(filePath);

		_res.writeHead(200, {
			'Content-Type': typeFile[_file.ext],
			'Content-Length': stat.size
		});

		_res.end(fs.readFileSync(filePath));
	} else {
		_res.writeHead(404);
		_res.end('Not Found');
	}
}