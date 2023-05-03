const { Router } = require('express');
const LoginController = require('../controllers/UserController');
const LoginService = require('../services/UserService');

const router = Router();
const loginService = new LoginService();

router.post('/', (req, res, next) => new LoginController(loginService, req, res, next).login());

module.exports = router;
