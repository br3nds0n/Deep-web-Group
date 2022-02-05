const ProjectRepository = require('../respository/ProjectRepository');

class ProjectService {

	async create (payload) {
		const result = await ProjectRepository.create(payload);
		return result;
	}

	async findAll(payload) {
		const result = await ProjectRepository.findAll(payload);
		return result;
	}

	async findById (id) {
		const result = await ProjectRepository.findById(id);
		return result;
	}
	
	async delete(id) {
		const result = await ProjectRepository.delete(id);
		return result;
	}	

	async update(id, payload) {
		const result = await ProjectRepository.update(id, payload);
		return result;
	}	
}

module.exports = new ProjectService();