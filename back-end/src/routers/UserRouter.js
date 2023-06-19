const { Router } = require('express');
const role = require('../utils/rolesList');
const UserController = require('../controllers/UserController');
const UserHandler = require('../middlewares/UserMiddlewares');
const UserService = require('../services/UserService');

const router = Router();
const userService = new UserService();

router.get(
  '/seller', 
  UserHandler.defaultAccess,
  UserHandler.roleAccess(role.ADMIN, role.SELLER),
  (req, res, next) => new UserController(userService, req, res, next).getAllSellers(),
);

router.get(
  '/customer', 
  UserHandler.defaultAccess,
  UserHandler.roleAccess(role.ADMIN, role.SELLER),
  (req, res, next) => new UserController(userService, req, res, next).getAllCustomers(),
  
);

router.delete(
  '/:id', 
  UserHandler.defaultAccess,
  UserHandler.roleAccess(role.ADMIN),
  (req, res, next) => new UserController(userService, req, res, next)
  .remove(),
);

router.get(
  '/', 
  UserHandler.defaultAccess,
  UserHandler.roleAccess(role.ADMIN),
  (req, res, next) => new UserController(userService, req, res, next)
  .getAll(),
);

router.get(
  '/:id',
  UserHandler.defaultAccess,
  UserHandler.roleAccess(role.ADMIN),
  (req, res, next) => new UserController(userService, req, res, next)
  .getById(),
);

router.patch(
  '/:id', 
  UserHandler.defaultAccess,
  UserHandler.roleAccess(role.ADMIN),
  (req, res, next) => new UserController(userService, req, res, next)
  .update(),
);

module.exports = router;
