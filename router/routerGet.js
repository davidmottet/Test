'use strict';
const config = require('../config/config');
const fileType = require('../config/fileType');

const ejs = require('ejs');

module.exports = (_req, _res, _parse) => {
	const { name, dir } = _parse;
	const filePath = `${global.dirname}/content/themes/${config.theme}`;

	const option = {};
	const data = {
		title: "App"
	};

	ejs.renderFile(`${filePath}/index.${config.template}`, data, option, (_err, _str) => {
		if (_err) {
			ejs.renderFile(`${filePath}/404.${config.template}`, data, option, (_err404, _str404) => {
				_res.writeHead(404);
				if (_err404) {
					console.log(_err404)
					_res.end('404');
				}
				_res.end(_str404);
			})
		}
		_res.writeHead(200, {
			'Content-Type': fileType[`.${config.template}`]
		});

		_res.end(_str);
	})
}