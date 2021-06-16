'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const logger = require('../src/middleware/logger.js');
const mockRequest = supertest(server);


test('middleware works', async () => {
  let requestObject = {
    method: 'test',
    path: 'test',
  }
  let responseObject = {};
  let nextFunction = jest.fn();
  console.log = jest.fn();

  logger(requestObject, responseObject, nextFunction);
  expect(nextFunction).toHaveBeenCalled();
  expect(console.log).toHaveBeenCalledWith('test', 'test');
});