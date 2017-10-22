'use strict';
const database = require('./config/database');
const DB = require('nosql');

global.dirname = __dirname;
// const dbUser = DB.load(`${__dirname}/database/user.nosql`);
const dbPages = DB.load(`${__dirname}/database/pages.nosql`);

const createPage = (_data) => {
	// TODO : remove
	_data = {
		status: 1,
		link: "exemple",
		date: "Sun Oct 22 2017 23:45:55 GMT+0200",
		title: "Page d’exemple",
		content: "Voici un exemple de page. Elle est différente d’un article de blog, en cela qu’elle restera à la même place, et s’affichera dans le menu de navigation de votre site (en fonction de votre thème)."
	}


	dbPages.find().make(function(builder) {
		builder.between("link", "=", _data.link);
		builder.callback(function(err, response) {
			// console.log('page', response);

			dbPages.insert(_data).callback(function(err) {
				console.log('The page has been created.');
			});
		});
	});
}

module.exports = dbPages;