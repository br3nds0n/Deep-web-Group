const router = require('express').Router();

const ProjectController = require('../../app/controller/ProjectController');
const projectValidation = require('../../app/validation/project/projectValidation');
const idValidation = require('../../app/validation/idValidation');
const findQueryValidation = require('../../app/validation/project/FindQueryValidation');

router
	.post('/project',projectValidation, ProjectController.create)
	.get('/project', findQueryValidation, ProjectController.findAll)
	.get('/project/:id', idValidation, ProjectController.findById )
	.put('/project/:id', idValidation, ProjectController.update)
	.delete('/project/:id', idValidation, ProjectController.delete);

module.exports = router;