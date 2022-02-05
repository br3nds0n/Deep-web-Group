const ProjectService = require('../service/ProjectService');

class ProjectController {

	async create (req, res) {
		try {
			const result = await ProjectService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async findAll(req, res) {
		const payload = req.query;
		try {
			const result = await ProjectService.findAll(payload);
			return res.status(200).json(result);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	
	async findById(req, res) {
		const { id } = req.params;
		try {
			const result = await ProjectService.findById(id);
			if (!result) {
				return res.status(400).json('Not found');
			}
			return res.status(200).json(result);			
		} catch (error) {
			return res.status(500).json(error); 
		}
	}
}


module.exports = new ProjectController();