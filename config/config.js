'use strict';

let PORT = null;
if (process.env.NODE_ENV === 'prod') {
	PORT = {"http": 80, "https": 443};
} else {
	PORT = {"http": 3000, "https": 3030};
}

module.exports = {
	"PORT": PORT,
	"session": {
		"secret": 'rickandmorty'
	},
	"theme": "default",
	"template": "ejs"
}