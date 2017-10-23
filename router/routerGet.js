'use strict';
const config = require('../config/config');
const configEjs = require('../config/ejs');
const configFileType = require('../config/fileType');
const database = require('../database');

const path = require('path');
const renderFile = require('ejs').renderFile;


const getPage404 = (_req, _res, _themePath, _data, _option) => {
	renderFile(`${_themePath}/404.${config.template}`, _data, _option, (_err404, _str404) => {
		if (_err404) {
			console.log(_err404)
		}
		_res.writeHead(200, {
			'Content-Type': configFileType[`.${config.template}`]
		});
		_res.end(_str404);
	})
}

module.exports = (_req, _res, _parse) => {
	const { name, dir } = _parse;
	const themePath = `${global.dirname}/content/themes/${config.theme}`;
	const option = configEjs;
	let data = {
		title: "App"
	};

	if (dir === `/${config.admin.link}`) {
		renderFile(`${global.dirname}/admin/${name}.ejs`, data, option, (_err, _str) => {
			if (_err) {
				getPage404(_req, _res, themePath, data, option);
			}
			_res.writeHead(200, {
				'Content-Type': configFileType[`.${config.template}`]
			});
			_res.end(_str);
		})
	} else {
		renderFile(`${themePath}/index.${config.template}`, data, option, (_err, _str) => {
			if (_err) {
				getPage404(_req, _res, themePath, data, option);
			}
			_res.writeHead(200, {
				'Content-Type': configFileType[`.${config.template}`]
			});

			_res.end(_str);
		})
	}
}