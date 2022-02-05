const Joi = require('joi');

const BadRequest = require('../errors/http/BadRequest');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			id: Joi.string()
				.min(24)
				.max(24)
		});

		const { error } = await schema.validate(req.query, { abortEarl: true });
		
		if (error) {
			throw new BadRequest({ details: error.details.map(err => err.message) });
		}

		next();
	} catch (error) {
		next(error);
	}
};