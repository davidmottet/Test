'use strict';

if (process.env.NODE_ENV === 'prod') {
	module.exports = {
		"PORT": {"http": 80, "https": 443},
		"session": {
			"secret": 'rickandmorty'
		},
		"file": "public"
	}
} else {
	module.exports = {
		"PORT": {"http": 3000, "https": 3030},
		"session": {
			"secret": 'rickandmorty'
		},
		"file": "public"
	}
}