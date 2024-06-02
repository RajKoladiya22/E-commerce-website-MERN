const express = require('express');
const passport = require('passport');
const LoginController = require('../controller/loginController');

const routes = express.Router();

routes.post('/api/v1/register', LoginController.Register);
routes.post('/api/v1/login', LoginController.login);


module.exports = routes;
