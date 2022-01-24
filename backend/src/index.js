"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./handlers')
const { PrismaClient } = require('@prisma/client')

const APPLICATION_NAME = process.env.APPLICATION_NAME || 'server';
const server = express();
const mode = process.env.NODE_ENV || 'development';
const port = process.env.PORT ? process.env.PORT : 3001;
const host = process.env.HOST ? process.env.HOST : 'localhost';

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const prisma = new PrismaClient();

handlers
  .forEach(({method, path, handler}) => server[method](path, handler(prisma)));

console.log(`Starting '${APPLICATION_NAME}' in '${mode}' mode...`);

server.listen(port, host, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`The server is running at http://${host}:${port}/`);
});
