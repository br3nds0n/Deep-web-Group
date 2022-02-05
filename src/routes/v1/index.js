const router = require('express').Router();

const projectRouter = require('./projectRouter');

router.use(projectRouter);

module.exports = router;