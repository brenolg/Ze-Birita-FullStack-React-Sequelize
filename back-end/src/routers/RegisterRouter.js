const { Router } = require('express');
const UserController = require('../controllers/UserController');
const UserService = require('../services/UserService');

const router = Router();
const userService = new UserService();

router.post('/', (req, res, next) => new UserController(userService, req, res, next).register());
router.get('/', (req, res, next) => new UserController(userService, req, res, next).getAll());

module.exports = router;
