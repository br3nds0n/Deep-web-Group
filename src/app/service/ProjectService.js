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

	async findById (id) {
		const result = await ProjectRepository.findById(id);
		return result;
	}
}

module.exports = new ProjectService();