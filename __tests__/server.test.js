'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const mockRequest = supertest(server);


// === === 404 on a bad route === === //
test('404 on a bad route', async () => {
  const response = await mockRequest.get('/badroute');
  expect(response.status).toEqual(404);
});


// === === 404 on a bad method === === //
test('404 on a bad method', async () => {
  const response = await mockRequest.post('/person');
  expect(response.status).toEqual(404);
});


// === === 500 if no name in the query string === === //
test('500 if no name in the query string', async () => {
  const response = await mockRequest.get('/person?name=');
  expect(response.status).toEqual(500);
});


// === === 200 if the name is in the query string === === //
test('200 if the name is in the query string', async () => {
  const response = await mockRequest.get('/person?name=tim');
  expect(response.status).toEqual(200);
});


// === === given a name in the query string, the output object is correct === === //
test('given a name in the query string, the output object is correct', async () => {
  const response = await mockRequest.get('/person?name=tim');
  expect(JSON.parse(response.text)).toEqual({ name: "tim" });
});