const { Router } = require('express');
const OrderController = require('../controllers/OrderController');
const UserHandler = require('../middlewares/UserMiddlewares');
const role = require('../utils/rolesList');
const OrderService = require('../services/OrderService');

const router = Router();
const orderService = new OrderService();

router.get(
  '/',
  UserHandler.defaultAccess, 
  (req, res, next) => new OrderController(orderService, req, res, next).getAll(),
);

// ESSA ROTA RETORNA TODOS OS PEDIDOS DE DETERMINADO USUÁRIO, DE ACORDO COM ID/ROLE DO USUÁRIO.
router.get(
  '/user',
  UserHandler.defaultAccess,
  (req, res, next) => new OrderController(orderService, req, res, next).getAllByUser(),
  );

// ESSA ROTA RETORNA O PEDIDO DE ACORDO COM SEU ID. -> DETALHES DO PEDIDO
router.get(
  '/:id', 
  // UserHandler.defaultAccess, -> Conferir porque está atrapalhando esta rota!!
  (req, res, next) => new OrderController(orderService, req, res, next).getById(),
);

router.post(
  '/',
  UserHandler.defaultAccess,
  (req, res, next) => new OrderController(orderService, req, res, next).create(),
  );

router.patch(
  '/:id',
  UserHandler.defaultAccess,
  UserHandler.roleAccess(role.SELLER),
  (req, res, next) => new OrderController(orderService, req, res, next).updateStatus(),
  );

router.delete(
'/:id', 
UserHandler.defaultAccess,
UserHandler.roleAccess(role.ADMIN),
(req, res, next) => new OrderController(orderService, req, res, next).remove(),
);

module.exports = router;
