const Joi = require('joi');

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

		if (error) throw error;
		return next();
    
	} catch (error) {
		return res.status(400).json(error);
	}
};