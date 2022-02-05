const router = require('express').Router();

const ProjectController = require('../../app/controller/ProjectController');
const projectValidation = require('../../app/validation/projectValidation');

router
	.post('/project',projectValidation, ProjectController.create)
	.get('/project', ProjectController.findAll)
	.get('/project/:id', ProjectController.findById )
	.delete('/project/:id', ProjectController.delete);

module.exports = router;