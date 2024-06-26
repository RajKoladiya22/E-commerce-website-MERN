const express = require('express');
const LoginController = require('../controller/loginController');
const verifyToken = require('../utils/auth')

const routes = express.Router();

routes.post('/api/v1/register', LoginController.Register);
routes.post('/api/v1/login', LoginController.login);
//Auth
routes.get('/api/v1/loginAuth', verifyToken, LoginController.AuthUser);


module.exports = routes;
