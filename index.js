'use strict';

require('dotenv').config();
const server = require('./src/server.js');
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log('server up and running'));