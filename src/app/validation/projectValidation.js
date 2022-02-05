const Joi = require('joi');

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

		if (error) throw error;
		return next();
    
	} catch (error) {
		return res.status(400).json(error);
	}
};