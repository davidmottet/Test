'use strict';

if (process.env.NODE_ENV === 'prod') {
	module.exports = {
		"PORT": 3030,
		"session": {
			"secret": 'rickandmorty'
		}
	}
} else {
	module.exports = {
		"PORT": 3000,
		"session": {
			"secret": 'rickandmorty'
		}
	}
}