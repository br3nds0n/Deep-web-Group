const ProjectRepository = require('../respository/ProjectRepository');

const UniqueEntryError = require('../errors/UniqueEntryError');
const EntityNotFound = require('../errors/EntityNotFound');

class ProjectService {

	async create (payload) {
		try {
			const result = await ProjectRepository.create(payload);
			return result;
		} catch (error) {
			if (error.name === 'MongoServerError' && error.code === 11000) {
				throw new UniqueEntryError(
					'PROJECT',
					Object.keys(error.keyPattern).map((key) => key)
				);
			} else {
				throw error;
			}
		}
	}

	async findAll(payload) {
		const result = await ProjectRepository.findAll(payload);
		return result;
	}

	async findById (id) {
		const result = await ProjectRepository.findById(id);

		if (result === null) {
			throw new EntityNotFound(`Cannot find project with ID = '${id}'`);
		}

		return result;
	}
	
	async delete(id) {
		const result = await ProjectRepository.delete(id);

		if (result === null) {
			throw new EntityNotFound(`Cannot find project with ID = '${id}'`);
		}

		return result;
	}	

	async update(id, payload) {
		const result = await ProjectRepository.update(id, payload);
		return result;
	}	
}

module.exports = new ProjectService();