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
	
}

module.exports = new ProjectRepository();