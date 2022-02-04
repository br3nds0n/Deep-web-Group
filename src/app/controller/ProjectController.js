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
}

module.exports = new ProjectController();