const schema = require('../schema/projectSchema');

class ProjectRepository {

	async create (payload) {
		return schema.create(payload);
	}
}

module.exports = new ProjectRepository();