const router = require('express').Router();

const ProjectController = require('../../app/controller/ProjectController');

router
	.post('/project', ProjectController.create);

module.exports = router;