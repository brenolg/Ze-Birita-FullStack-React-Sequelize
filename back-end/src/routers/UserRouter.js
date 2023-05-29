const { Router } = require('express');
const UserController = require('../controllers/UserController');
const UserHandler = require('../middlewares/UserMiddlewares');
const UserService = require('../services/UserService');

const router = Router();
const userService = new UserService();

router.get(
  '/seller', 
  UserHandler.defaultAccess,
  (req, res, next) => new UserController(userService, req, res, next).getAllSellers(),
);

router.get(
  '/customer', 
  UserHandler.defaultAccess,
  (req, res, next) => new UserController(userService, req, res, next).getAllCustomers(),
);

module.exports = router;
