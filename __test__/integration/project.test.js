const supertest = require('supertest');
const mongoose = require('mongoose');

const App = require('../database');
const projectService = require('../../src/app/service/ProjectService.js');

const project = {};

describe('Test-Feature-project', () => {
	beforeAll(async () => {

		project.p1 = await projectService.create({
			'title': 'controle de estoque',
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
	});

	afterAll(async () => {
		await mongoose.connection.dropDatabase;
		await mongoose.connection.close();
	});

	it('GET /api/v1/project - find All', async ()=> {
		const res = await supertest(App)
			.get('/api/v1/project');

		expect(res.statusCode).toBe(200);
	});

	it('GET/:id /api/v1/project/:id', async ()=> {
		const res = await supertest(App)
			.get(`/api/v1/project/${project.p1._id}`);

		expect(res.statusCode).toBe(200);
		expect(res.body.title).toBe('controle de estoque');
	});

	it('POST /api/v1/project', async ()=> {
		const res = await supertest(App)
			.post('/api/v1/project')
			.send({
				'title': 'controle de estoque',
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

		expect(res.statusCode).toBe(201);
	});

	it('PUT /api/v1/project/:id', async ()=>{
		const res = await supertest(App)
			.put(`/api/v1/project/${project.p1._id}`)
			.send({
				'title': 'outro controle',
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
		expect(res.statusCode).toBe(200);
		expect(res.body.title).toBe('outro controle');
	});

	it('DELETE /api/v1/project/:id', async () => {
		const res = await supertest(App)
			.delete(`/api/v1/project/${project.p1._id}`);

		expect(res.statusCode).toBe(204);
	});
});