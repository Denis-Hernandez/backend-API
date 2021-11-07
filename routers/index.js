const express = require('express');

const testRouter = require('./planets.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/planets',testRouter);
}

module.exports = routerApi;
