const { Router } = require('express');
const RegisterController = require('../controllers/UserController');
const RegisterService = require('../services/UserService');

const router = Router();
const registerService = new RegisterService();

router.post('/', (req, res, next) => new RegisterController(registerService, req, res, next)
.register());

module.exports = router;
