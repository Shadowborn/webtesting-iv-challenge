const supertest = require('supertest');

const server = require('./server.js');

describe('Server test', () => {
    describe('Can reach GET /', () => {
        // asynchronous test need to either return the promise
        it('responds with 200 OK', () => {
            return supertest(server)
                .get('/')
                .expect(200);
        });
        it('responds { api: "up" }', async () => {
            await supertest(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual({ api: 'up' });
                });
        });
    })
    describe('Can reach GET /hobbits', () => {
        // asynchronous test need to either return the promise
        it('responds with 200 OK', () => {
            return supertest(server)
                .get('/hobbits')
                .expect(200);
        });
    })
    describe('Can reach POST /hobbits', () => {
        // asynchronous test need to either return the promise
        it('responds with 200 OK', () => {
            return supertest(server)
                .post('/hobbits')
                .expect(201);
        });
    })
    describe('Can reach DELETE /hobbits', () => {
        // asynchronous test need to either return the promise
        it('responds with 200 OK', () => {
            return supertest(server)
                .delete('/hobbits')
                .expect(200);
        });
    })
});