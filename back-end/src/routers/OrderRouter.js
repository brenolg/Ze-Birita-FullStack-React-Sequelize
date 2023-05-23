const { Router } = require('express');
const OrderController = require('../controllers/OrderController');
const UserHandler = require('../middlewares/UserMiddlewares');
const role = require('../utils/rolesList');
const OrderService = require('../services/OrderService');

const router = Router();
const orderService = new OrderService();

router.get(
  '/', 
  (req, res, next) => new OrderController(orderService, req, res, next).getAll(),
);

// ESSA ROTA RETORNA O PEDIDO DE ACORDO COM SEU ID. -> DETALHES DO PEDIDO
router.get(
  '/:id', 
  UserHandler.defaultAccess,
  (req, res, next) => new OrderController(orderService, req, res, next).getById(),
);

// ESSA ROTA RETORNA TODOS OS PEDIDOS DE DETERMINADO USUÁRIO, DE ACORDO COM ID/ROLE DO USUÁRIO.
router.get(
  '/user/:id',
  UserHandler.defaultAccess,
  (req, res, next) => new OrderController(orderService, req, res, next).getAllByUser(),
  );

router.post(
  '/',
  UserHandler.defaultAccess,
  (req, res, next) => new OrderController(orderService, req, res, next).create(),
  );

router.patch(
  '/',
  UserHandler.defaultAccess,
  (req, res, next) => new OrderController(orderService, req, res, next).updateStatus(),
  );

router.delete(
'/:id', 
UserHandler.defaultAccess,
UserHandler.roleAccess(role.ADMIN),
(req, res, next) => new OrderController(orderService, req, res, next).remove(),
);

module.exports = router;
