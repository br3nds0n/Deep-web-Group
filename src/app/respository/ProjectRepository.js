const schema = require('../schema/projectSchema');

class ProjectRepository {

	async create (payload) {
		return schema.create(payload);
	}

	async findAll(payload) {
		const myCustomLabels = {
			totalDocs: 'total',
			docs: 'Tasks',
			page: 'offset',
			nextPage: false,
			prevPage: false,
			totalPages: 'offsets',
			pagingCounter: false,
			meta: false,
			hasPrevPage: false,
			hasNextPage: false
		};
		const options = {
			page: 1,
			limit: 100,
			customLabels: myCustomLabels
		};
		return schema.paginate(payload,options,{});
	}

	async findById (id) {
		return schema.findById(id);
	}
	
	async update(id, payload) {
		await schema.updateOne({ _id: id }, payload);
		return schema.findOne({ _id: id });
	}

	async delete(id) {
		return schema.deleteOne({ _id: id });
	}		
}

module.exports = new ProjectRepository();