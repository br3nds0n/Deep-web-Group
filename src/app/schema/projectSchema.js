/* eslint-disable indent */
const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	createdAt:{
		type: Date,
		default: Date.now
	},
	updatedAt:{
		type: Date,
		default: Date.now
	},  
    
	task : {
        type: Array,
        required: true
    }
},
);

projectSchema.method('toJSON', function () {
	const { ...Project } = this.toObject();
    Project.__v = undefined;
	return Project;
});

const Project = mongoose.model('Projects', projectSchema);
module.exports = Project;
