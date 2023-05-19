const { Router } = require('express');
const OrderController = require('../controllers/OrderController');
const UserHandler = require('../middlewares/UserMiddlewares');
const role = require('../utils/rolesList');
const OrderService = require('../services/OrderService');

const router = Router();
const orderService = new OrderService();

router.get(
  '/', 
  (req, res, next) => new OrderController(orderService, req, res, next)
  .getAll(),
);

router.get(
  '/:id', 
  (req, res, next) => new OrderController(orderService, req, res, next)
  .getById(),
);

router.post(
  '/', 
  (req, res, next) => new OrderController(orderService, req, res, next)
  .create(),
);

router.delete(
'/:id', 
UserHandler.defaultAccess,
UserHandler.roleAccess(role.ADMIN),
(req, res, next) => new OrderController(orderService, req, res, next)
.remove(),
);

module.exports = router;
