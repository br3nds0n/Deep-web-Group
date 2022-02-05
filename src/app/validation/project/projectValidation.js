const Joi = require('joi');

const BadRequest = require('../../errors/http/BadRequest');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			title: Joi.string() 
				.trim()
				.required(),
      
			description: Joi.string()
				.trim()
				.required(),

			task:Joi.array()
				.min(1)
				.items(
					Joi.object({
						title: Joi.string()
							.trim()
							.required(),
						taskRelevance: Joi.number()
							.required(),
						completed: Joi.boolean()
							.required() 
					})
				)
				.required()
		});

		const { error } = await schema.validate(req.body, {
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