const mongoose = require('mongoose');
require('dotenv/config');

class Database {
	constructor () {
		this.connect();
	}

	connect () {
		return mongoose.connect('mongodb://127.0.0.1:27017/tests')
			.catch((err) => console.log(err));

	}
}

module.exports = new Database().connect();