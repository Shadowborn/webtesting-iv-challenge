const supertest = require('supertest');

const server = require('./server.js');

const db = require('../data/dbConfig.js');

const { insert, remove } = require('../hobbits/hobbitsModel');

describe('Server test', () => {

    beforeEach(async () => {
        await db('hobbits').truncate();
      });

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
        it('should insert hobbits', async () => {
            await insert({ name: 'Matt' });
            await insert({ name: 'Jonathan' });
      
            const hobbits = await db('hobbits');
      
            expect(hobbits).toHaveLength(2);
          });
    })
    describe('Can reach DELETE /hobbits', () => {
        // asynchronous test need to either return the promise
        it('Should delete hobbits', async () => {
            await remove({ name: 'Matt' });
            await remove({ name: 'Jonathan' });
      
            const hobbits = await db('hobbits');
      
            expect(hobbits).toHaveLength(0);
        });
    })
});