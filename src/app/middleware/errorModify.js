const HttpError = require('../errors/http/httpError');

module.exports = function (err, req, res, next) {
	if (err instanceof HttpError) {
		res.status(err.statusCode).json({
			message: err.name,
			...err.body
		});
	} else {
		res.status(500).json({
			message: 'Internal Server Error'
		});
	}
};