'use strict';

const { server } = require('../lib/server');
const supertest = require('supertest');
const { describe, it, expect } = require('@jest/globals');
const mockRequest = supertest(server);

describe('no name on the query string', () => {
    it('should respond with a 500', () => {
        return mockRequest
        .get('/person')
        .then(results => {
            expect(results.status).toBe(500)
        }).catch(console.error);
    })
})

describe('is the name in the query string', () => {
    it('should respond with a 200', () => {
        return mockRequest
        .get('/person?name=fred')
        .then(results => {
            expect(results.status).toBe(200)
        }).catch(console.error);
    })
})

describe('if there is a name in the query string, it will output a correct object', () => {
    it('should respond with { name: fred }', () => {
        return mockRequest
        .get('/person?name=fred')
        .then(results => {
            expect(results.body).toEqual({ name: 'fred' })
        }).catch(console.error);
    })
})