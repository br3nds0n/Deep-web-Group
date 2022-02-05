const Joi = require('joi');

const BadRequest = require('../../errors/http/BadRequest');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			title: Joi.string() 
				.trim(),
      
			description: Joi.string()
				.trim(),

			task:Joi.array()
				.min(1)
				.items(
					Joi.object({
						title: Joi.string()
							.trim(),
						taskRelevance: Joi.number(),
						completed: Joi.boolean()
					})
				)
		});

		const { error } = await schema.validate(req.query, {
			abortEarly: false,
			allowUnknown: false,
		});

		if (error) {
			throw new BadRequest({ details: error.details.map(err => err.message) });
		}

		next();
	} catch (error) {
		next(error);
	}
};