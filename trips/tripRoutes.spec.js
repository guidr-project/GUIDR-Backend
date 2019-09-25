const request = require('supertest');
const db = require('../database/db-config.js');
const server = require('../api/server.js');

describe('tripRoutes.js', () => {
    let userId;
    let tripId;

    beforeEach(async () => {
        await db('users').del();
    });

    it('should be using the test environment', () => {
        expect(process.env.NODE_ENV).toBe('testing');
    });

    describe('GET /trips', () => {
        it('returns 200 OK', () => {
            return request(server)
                .get('/trips')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });

    describe('PUT /trips/:id', () => {
        it('returns 200 OK', async () => {
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
                .put(`/trips/1`)
                .send({
                    title: 'Somethinggherjg',
                    description: 'Kayaking at the lake',
                    private: false,
                    type: 'Kayaking',
                    start_date: '2019-07-22',
                    end_date: '2019-07-25',
                    duration_hours: 12,
                    duration_days: 0
                })
                .set('Accept', 'application/json')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });

    describe('DELETE /trips/:id', () => {
        it('returns 200 OK', async () => {
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

            await request(server)
                .post('/users/login')
                .send({
                    username: 'username2',
                    password: 'password'
                })
                .set('Accept', 'application/json')
                .then(res => {
                    //console.log(res)
                    userId = JSON.parse(res.res.text).id;

                });

            await request(server)
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
                    tripId = JSON.parse(res.res.text)[0].id;
                    //console.log(tripId);
                });

            return request(server)
                .delete(`/trips/${tripId}`)
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });
});
