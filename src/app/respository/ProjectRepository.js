const schema = require('../schema/projectSchema');

class ProjectRepository {

	async create (payload) {
		return schema.create(payload);
	}
	async findAll(payload) {
		return schema.find(payload);
	}
	
}

module.exports = new ProjectRepository();