'use strict';

module.exports = (request, response, next) => {
  console.log(request.method, request.path);
  next();
}