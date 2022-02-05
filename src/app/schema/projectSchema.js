
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const projectSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	task : [{
		title : { type:String,required:true},
		taskRelevance :{ type:Number,required:true},
		completed :{ type:Boolean,required:true},
		createdAt:{type:Date,default:Date.now
		},
		updatedAt:{type:Date,default:Date.now
		},
		_id:false
	},] 
},
{ timestamps: true });

projectSchema.method('toJSON', function () {
	const { ...Project } = this.toObject();
	Project.__v = undefined;
	return Project;
});
projectSchema.plugin(mongoosePaginate);

const Project = mongoose.model('Projects', projectSchema);
module.exports = Project;
