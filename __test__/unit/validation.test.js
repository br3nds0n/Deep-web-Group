const App = require('../database');
const supertest = require('supertest');

describe('Project-Validation', () => {
	it('POST /api/v1/project - invalid', async() =>{
		const res = await supertest(App)
			.post('/api/v1/project')
			.send({
				'title': ' ',
				'description': 'responsável por acompanhar o fluxo de mercadorias da empresa.',
              
				'task': [
					{
						'title': 'desenvolver endpoint para cadastro de produto',
						'taskRelevance': 10,
						'completed': false
              
					},
					{
						'title': 'desenvolver endpoint para realizar a baixo do produto',
						'taskRelevance': 10,
						'completed': false
              
					}
				]
			});
		expect(res.statusCode).toBe(400);
	});
});