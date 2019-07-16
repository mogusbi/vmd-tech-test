const { Router } = require('express');
const { create, list, read } = require('./message.controller');

const routes = Router();

routes.get('/', list);
routes.post('/', create);
routes.get('/:id', read);

module.exports = routes;
