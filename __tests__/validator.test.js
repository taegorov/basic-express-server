'use strict';

const validator = require('../src/middleware/validator');
const error500 = require('../src/error-handlers/500');

describe('validator should validate that the request contains a name parameter', () => {

  test('runs error handler 500 on invalid query', () => {
    const requestObject = {
      query: '',
    }
    const responseObject = {};
    const nextFunction = jest.fn();
    validator(requestObject, responseObject, nextFunction);
    expect(nextFunction).toHaveBeenCalledWith(error500);
  });

  test('successfully moves to the next function', () => {
    const requestObject = {
      query: { name: 'tim' }
    }
    const responseObject = {};
    const nextFunction = jest.fn();
    validator(requestObject, responseObject, nextFunction);
    expect(nextFunction).toHaveBeenCalled();
  });
});