'use strict';

module.exports = (error, request, response, next) => {
  console.log(error);
  response.status(404).send(error)
  next();
}