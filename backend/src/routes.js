const express = require('express');

const routes = express.Router();

const ongcontroller = require('./controller/ongcontroller');

const incidentcontroller = require('./controller/incidentcontroller');

const profilecontroller = require('./controller/profilecontroller');

const sessioncontroller = require('./controller/sessioncontroller');

routes.post('/sessions', sessioncontroller.create);

routes.get('/profile', profilecontroller.index);

routes.post('/ongs', ongcontroller.create);
routes.get('/ongs', ongcontroller.index);

routes.get('/incident', incidentcontroller.index);
routes.post('/incident', incidentcontroller.create);
routes.delete('/incident/:id', incidentcontroller.delete);


module.exports = routes