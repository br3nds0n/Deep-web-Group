const ProjectRepository = require('../respository/ProjectRepository');

class ProjectService {

	async create (payload) {
		const result = await ProjectRepository.create(payload);
		return result;
	}

	async findAll(payload) {
		const data = await ProjectRepository.findAll(payload);
		return data;
	}
}

module.exports = new ProjectService();