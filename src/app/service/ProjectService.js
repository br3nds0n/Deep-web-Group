const ProjectRepository = require('../respository/ProjectRepository');

class ProjectService {

	async create (payload) {
		const result = await ProjectRepository.create(payload);
		return result;
	}
}

module.exports = new ProjectService();