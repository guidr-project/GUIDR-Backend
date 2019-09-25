const request = require('supertest');
const db = require('../database/db-config.js');
const server = require('../api/server.js');

describe('userRoutes.js', () => {
    let userId;

    beforeEach(async () => {
        await db('users').del();
    });

    it('should be using the test environment', () => {
        expect(process.env.NODE_ENV).toBe('testing');
    });

    describe('GET /users/:id/profile', () => {
        it('returns 200 OK', () => {
            return request(server)
                .get('/users/1/profile')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });

    describe('GET /users/:id/trips', () => {
        it('returns 200 OK', () => {
            return request(server)
                .get('/users/1/trips')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });

    describe('POST /users/:id/trips', () => {
        it('returns 201 CREATED', async () => {
            await request(server)
                .post('/users/signUp')
                .send({
                    username: 'username',
                    password: 'password',
                    email: '1@gmail.com',
                    full_name: 'test_name'
                })
                .set('Accept', 'application/json')
                .then(res => {});

            await request(server)
                .post('/users/login')
                .send({
                    username: 'username',
                    password: 'password'
                })
                .set('Accept', 'application/json')
                .then(res => {
                    userId = JSON.parse(res.res.text).id;
                });

            return request(server)
                .post(`/users/${userId}/trips`)
                .send({
                    title: 'ewfwwe',
                    description: 'When hiking through the park',
                    private: false,
                    type: 'Hiking',
                    start_date: '2019-07-15',
                    end_date: '2019-07-17',
                    duration_hours: 5,
                    duration_days: 2
                })
                .set('Accept', 'application/json')
                .then(res => {
                    expect(res.status).toBe(201);
                });
        });
    });

    describe('PUT /users/:id/profile', () => {
        it('returns 201 CREATED', async () => {
            await request(server)
                .post('/users/signUp')
                .send({
                    username: 'username2',
                    password: 'password',
                    email: '2@gmail.com',
                    full_name: 'test_name'
                })
                .set('Accept', 'application/json')
                .then(res => {});

            let userId;

            await request(server)
                .post('/users/login')
                .send({
                    username: 'username2',
                    password: 'password'
                })
                .set('Accept', 'application/json')
                .then(res => {
                    userId = JSON.parse(res.res.text).id;
                });

            return request(server)
                .put(`/users/${userId}/profile`)
                .send({
                    full_name: 'test_name2',
                    email: '433ferfergre21@gmail.com',
                    title: 'something',
                    description: 'regergeg',
                    age: 80,
                    experience_duration: '2 days'
                })
                .set('Accept', 'application/json')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });
});
