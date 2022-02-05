const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('./infra/database/mongo');

const errorModify = require('./app/middleware/errorModify');

class App {
	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
		this.errorModify();
	}

	middlewares() {
		this.server.use(express.urlencoded({ extended: true }));
		this.server.use(express.json());
		this.server.use(cors());
	}

	routes() {
		this.server.use('/api/', routes);
	}

	errorModify() {
		this.server.use(errorModify);
	}
}

module.exports = new App().server;