const ProjectService = require('../service/ProjectService');

const BadRequest = require('../errors/http/BadRequest');
const EntityNotFound = require('../errors/EntityNotFound');
const NotFound = require('../errors/http/NotFound');
const UniqueEntryError = require('../errors/UniqueEntryError');

class ProjectController {

	async create (req, res, next) {
		try {
			const result = await ProjectService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			if (error instanceof UniqueEntryError) {
				next(new BadRequest({ details: error.message }));
			}
			next(error);
		}
	}

	async findAll(req, res, next) {
		const payload = req.query;
		try {
			const result = await ProjectService.findAll(payload);
			return res.status(200).json(result);
		} catch (error) {
			next(error);
		}
	}
	
	async findById(req, res, next) {
		const { id } = req.params;
		try {
			const result = await ProjectService.findById(id);

			return res.status(200).json(result);			
		} catch (error) {
			if (error instanceof EntityNotFound) {
				next(new NotFound(error.message));
			}
			next(error);
		}
	}

	async update(req, res, next) {
		const { id } = req.params;
		const data = req.body;	
		try {		
			const result = await ProjectService.update(id, data);

			return res.status(200).json(result);
		} catch (error) {
			if (error instanceof EntityNotFound) {
				next(new NotFound(error.message));
			}
			next(error); 		
		}	
	}	

	async delete (req, res) {
		try {
			const { id } = req.params;
			const result = await ProjectService.findById({ _id: id });	
			if (!result) {
				return res.status(404).json('Not found');
			}
			await ProjectService.delete({ _id: id });
			return res.status(204).json();			
		} catch (error) {
			return res.status(500).json(error);
		}
	}	
}

module.exports = new ProjectController();