'use strict';

module.exports = (error, request, response, next) => {
  console.log(error);
  response.status(500).send(error);
}