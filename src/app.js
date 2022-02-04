const express = require('express');

const routes = require('./routes');
require('./infra/database/mongo');

class App {
	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(express.urlencoded({ extended: true }));
		this.server.use(express.json());
	}

	routes() {
		this.server.use('/api/', routes);
	}
}

module.exports = new App().server;