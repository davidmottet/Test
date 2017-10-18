'use strict';

if (process.env.NODE_ENV === 'prod') {
	module.exports = {
		"PORT": {"http": 80, "https": 443},
		"session": {
			"secret": 'rickandmorty'
		}
	}
} else {
	module.exports = {
		"PORT": {"http": 3000, "https": 3000},
		"session": {
			"secret": 'rickandmorty'
		}
	}
}