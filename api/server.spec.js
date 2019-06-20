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
    })
});