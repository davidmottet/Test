'use strict';
const database = require('./config/database');
const DB = require('nosql');

global.dirname = __dirname;
// const dbUser = DB.load(`${__dirname}/database/user.nosql`);
const dbPages = DB.load(`${__dirname}/database/pages.nosql`);

const createPage = (_data) => {
	dbPages.find().make(function(builder) {
		builder.where("link", _data.link);
		builder.callback(function(_err, _resp) {
			if (_err) {console.log('Searching error.', _err);}
			if (!_resp.length) {
				dbPages.insert(_data).callback(function(_insertErr) {
					if (_insertErr) {console.log('The page has been not created.', _insertErr);}
				});
			} else {
				console.log('The page has been not created, already exist');
			}
		});
	});
}

module.exports = {createPage: createPage};