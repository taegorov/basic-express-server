'use strict';
const error500 = require('../error-handlers/500.js')

module.exports = (request, response, next) => {
  if (!request.query.name) {
    next(error500);
  } else {
    next();
  }
}
