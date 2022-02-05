const Joi = require('joi');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			id: Joi.string()
				.min(24)
				.max(24)
		});

		const { error } = await schema.validate(req.query, { abortEarl: true });
		if (error) throw error;

		if (error) throw error;
		return next();
    
	} catch (error) {
		return res.status(400).json(error);
	}
};